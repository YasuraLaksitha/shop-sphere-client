import {createAsyncThunk, GetThunkAPI} from "@reduxjs/toolkit";
import {categoryBaseURL} from "./AxiosConfig.ts";
import {AxiosResponse} from "axios";

export const fetchAllCategories = createAsyncThunk(
    "FETCH_CATEGORIES",
    async (_, thunkAPI: GetThunkAPI<any>) => {
        try {
            const categoryResponse: AxiosResponse = await categoryBaseURL.get('/public/categories');
            return categoryResponse.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message ?? 'Something went wrong');
        }
    }
);