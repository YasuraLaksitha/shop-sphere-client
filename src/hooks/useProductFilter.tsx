import {useSearchParams} from "react-router-dom";
import {useProductDispatch} from "../store/Hooks.ts";
import {useEffect} from "react";
import {fetchAllProducts} from "../api/ProductAPIS.ts";

export default function useProductFilter() {
    const [searchParams] = useSearchParams();
    const dispatch = useProductDispatch();

    useEffect(() => {
        const currentPage: number = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        const size: number = searchParams.get("size") ? Number(searchParams.get("size")) : 50;

        searchParams.set("page", (currentPage - 1).toString());
        searchParams.set("size", size.toString());
        searchParams.set("sortOrder", searchParams.get("sortOrder") ?? "asc");
        searchParams.set("sortBy", searchParams.get("sortBy") ?? "productPrice");

        const queryString: string = searchParams.toString();

        dispatch(fetchAllProducts({queryString}))
    }, [searchParams, dispatch]);


}
