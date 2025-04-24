import {createAsyncThunk} from "@reduxjs/toolkit";
import {productBaseURL} from "./AxiosConfig";
import {AxiosResponse} from "axios";

type FetchAllProductProps = { queryString: string }

export const fetchAllProducts = createAsyncThunk(
    "FETCH_PRODUCTS",
    async (props: Partial<FetchAllProductProps>, thunkAPI) => {

        try {
            const response: AxiosResponse = await productBaseURL.get(`/public/products?${props.queryString}`, {});
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.date?.message ?? 'Something went wrong');
        }
    }
)