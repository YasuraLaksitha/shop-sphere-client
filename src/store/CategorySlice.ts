import {CategoryModel} from "../Models/CategoryModel.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCategories} from "../api/CategoryAPIs.ts";

type CategoryStateProps = {
    categories?: [CategoryModel],
    isLoading?: boolean,
    error?: string
}

const initCategoryState: CategoryStateProps = {
    categories: undefined,
    isLoading: undefined,
    error: undefined
}

const categorySlice = createSlice({
    name: 'CATEGORY_SLICE',
    initialState: initCategoryState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllCategories.rejected,(state,action)=> {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchAllCategories.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.error = undefined;
                state.categories = action.payload.contentSet;
            })
    }
})

export default categorySlice.reducer