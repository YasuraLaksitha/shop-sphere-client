import {createSlice} from "@reduxjs/toolkit"
import {fetchAllProducts} from "../api/ProductAPIs.ts"
import {ProductModel} from "../Models/ProductModel"

type PaginationProps = {
    page: number,
    size: number,
    sortBy: string,
    sortOrder: string,
    totalPages: number,
    totalElements: number,
    last: boolean
}

type ProductStateProps = {
    products?: ProductModel[],
    pagination?: PaginationProps,
    error?: string,
    isLoading?: boolean
}

const initProductState: ProductStateProps = {
    products: undefined,
    pagination: undefined,
    error: undefined,
    isLoading: undefined
}

const productSlice = createSlice({
    name: 'PRODUCT_REDUCER',
    initialState: initProductState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.contentSet;
                state.pagination = {
                    page: action.payload.page,
                    size: action.payload.size,
                    sortBy: action.payload.sortBy,
                    sortOrder: action.payload.sortDir,
                    totalElements: action.payload.totalElements,
                    totalPages: action.payload.totalPages,
                    last: action.payload.last
                }
            })
    }
})

export default productSlice.reducer