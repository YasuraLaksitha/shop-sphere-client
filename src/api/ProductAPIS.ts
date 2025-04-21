import { createAsyncThunk } from "@reduxjs/toolkit";
import { productBaseURL } from "./AxiosConfig";

type FetchAllProductProps = { size: number, page: number }

export const fetchAllProducts = createAsyncThunk(
    "FETCH_PRODUCTS",
    async (props: Partial<FetchAllProductProps>, thunkAPI) => {

        try {
            const response = await productBaseURL.get('/public/products', {
                params: {
                    page: props.page,
                    size: props.size
                }
            });         
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.date?.message ?? 'Something went wrong');
        }
    }
)