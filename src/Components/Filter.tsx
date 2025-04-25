import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip} from "@mui/material";
import {ChangeEvent, SetStateAction, useEffect, useState} from "react";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {NavigateFunction, useLocation, useNavigate, useSearchParams} from "react-router-dom"
import {FiRefreshCw, FiSearch} from "react-icons/fi";
import {useRootDispatch, useRootSelector} from "../store/Hooks.ts";
import {RootState} from "../store/ConfigStore.ts";
import {fetchAllCategories} from "../api/CategoryAPIs.ts";

type SortOrderToggler = "asc" | "desc";

export default function Filter() {
    const {categories} = useRootSelector((state: RootState) => state.categories);
    const dispatch = useRootDispatch();

    const navigate: NavigateFunction = useNavigate();
    const pathName: string = useLocation().pathname;
    const [searchParams] = useSearchParams();

    const [category, setCategory] = useState<string>("all");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);

    useEffect((): void => {
        setCategory(searchParams.get("category") as SetStateAction<string>);
        setSortOrder(searchParams.get("sortOrder") as SetStateAction<string>);
        setSearchTerm(searchParams.get("keyword") as SetStateAction<string | undefined>);
    }, [searchParams])

    useEffect((): () => void => {
        const timeOutHandler: number = setTimeout((): void => {
            if (searchTerm)
                searchParams.set("keyword", searchTerm);
            else
                searchParams.delete("keyword");
            navigate(`${pathName}?${searchParams}`);
        }, 600)

        return (): void => {
            clearTimeout(timeOutHandler);
        }
    }, [searchTerm, searchParams, pathName, navigate]);

    function handleCategoryChange(e: SelectChangeEvent): void {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);

        if ("all" === selectedCategory) {
            searchParams.delete("category");
        } else {
            searchParams.set("category", selectedCategory);
        }
        navigate(`${pathName}?${searchParams}`)
    }

    function toggleSortOrder(): void {
        setSortOrder((preState: string): SortOrderToggler => {
            const newSortOrder: SortOrderToggler = preState === "asc" ? "desc" : "asc";
            searchParams.set("sortOrder", newSortOrder)
            navigate(`${pathName}?${searchParams}`)
            return newSortOrder;
        })
    }

    return (
        <div className="flex lg:flex-row mx-18 my-10 flex-col-reverse lg:justify-between items-center justify-center">

            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px]">
                <input
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search Products"
                    className="border min-w-[420px] border-gray-400 text-slate-800 py-3 ps-10 rounded-md
                    focus:ring-1 focus:outline-none focus:ring-blue-900"/>
                <FiSearch className="absolute left-3 text-slate-800"/>
            </div>

            <div className="flex sm:flex-row gap-4 items-center">
                <FormControl variant="outlined" size="small">
                    <InputLabel id="lbl-category-select">Category</InputLabel>
                    <Select
                        value={category}
                        className="text-slate-800 border-slate-700 min-w-[120px]"
                        labelId="lbl-category-select"
                        label="Category"
                        onChange={handleCategoryChange}>

                        <MenuItem value="all">All</MenuItem>
                        {categories?.map((item, index) => (
                            <MenuItem key={index} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div>
                    <Tooltip
                        title={sortOrder === "asc" ?
                            "Sort products in ascending order " :
                            "Sort products in descending order "
                        }>

                        <Button
                            onClick={toggleSortOrder}
                            variant="contained"
                            color="primary"
                            className="flex items-center gap-3">
                            Sort By
                            {sortOrder === "asc" ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}
                        </Button>
                    </Tooltip>
                </div>

                <div>
                    <button
                        onClick={(): void | Promise<void> => navigate({pathname: window.location.pathname})}
                        className="flex cursor-pointer rounded-sm gap-2 items-center bg-rose-800 text-white px-3 py-2
                            transition duration-300 ease-in shadow-sm focus:outline-none hover:bg-rose-900">
                        <FiRefreshCw/>
                        <span className="font-semibold">Clear Filter</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
