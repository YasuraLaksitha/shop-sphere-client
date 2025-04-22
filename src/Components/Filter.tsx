import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiRefreshCcw, FiRefreshCw, FiSearch } from "react-icons/fi";

const categories: Array<string> = ["Electronics", "Sports", "Fashion", "Food"];

export default function Filter() {
  const [category, setCategory] = useState<string>("all");

  function handleCategoryChange(e: SelectChangeEvent<string>) {
    setCategory(e.target.value);
  }

  return (
    <div className="flex lg:flex-row mx-18 my-10 flex-col-reverse lg:justify-between items-center justify-center">

      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px]">
        <input
          type="text"
          placeholder="Search Products"
          className="border min-w-[420px] border-gray-400 text-slate-800 py-3 ps-10 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-900" />
        <FiSearch className="absolute left-3 text-slate-800" />
      </div>

      <div className="flex sm:flex-row gap-4 items-center">
        <FormControl variant="outlined" size="small">
          <InputLabel id="lbl-category-select">Category</InputLabel>
          <Select
            className="text-slate-800 border-slate-700 min-w-[120px]"
            labelId="lbl-category-select"
            label="Category"
            onChange={handleCategoryChange}>

            <MenuItem value="all">All</MenuItem>
            {categories.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>
          <Tooltip title="Sort by category acsending">

            <Button
              variant="contained"
              color="primary"
              className="flex items-center gap-3">
              Sort By
              <FaArrowUp size={20} />
            </Button>
          </Tooltip>
        </div>

        <div>
          <button className="flex cursor-pointer rounded-sm gap-2 items-center bg-rose-800 text-white px-3 py-2 
          transition duration-300 ease-in shadow-sm focus:outline-none hover:bg-rose-900">
            <FiRefreshCw />
            <span className="font-semibold">Clear Filter</span>
          </button>
        </div>

      </div>
    </div>
  )
}
