import {Pagination} from "@mui/material";
import {NavigateFunction, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import React from "react";

type PaginationDataProps = {
    numberOfPages: number,
    dataCount: number
}

export default function PaginationData(props: Readonly<PaginationDataProps>) {
    const [searchParams] = useSearchParams();
    const location: string = useLocation().pathname;
    const navigate: NavigateFunction = useNavigate();

    const pageValue: number = searchParams.get("page") ?
        Number(searchParams.get("page")) : 1;

    function handlePageChange(_: React.ChangeEvent<unknown>, value: number) {
        searchParams.set("page", value.toString());
        navigate(`${location}?${searchParams}`);
    }

    return (
        <div>
            <Pagination
                page={pageValue}
                count={props.numberOfPages}
                defaultPage={6}
                siblingCount={0}
                onChange={handlePageChange}
            />
        </div>
    );
}