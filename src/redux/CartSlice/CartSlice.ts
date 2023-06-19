import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {AuthorizationToken} from "@/constants/constans";


export const fetchCartData: any = createAsyncThunk('cart/fetchCartData', async (props: string[]) => {
    const response = await fetch(`https://art-vostorg-store-test.up.railway.app/api/basket/`, {
        headers: {
            Authorization: AuthorizationToken
        }
    });
    return response.json();
}, {
    condition: (props, { getState }) => {
        //@ts-ignore
        const { isLoading } = getState().store;
        return !isLoading;
    },
});




const initialState = {
    products: [],
    loading: false
}

export const cartSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        pushProductInCart: (state: Draft<any>, action: PayloadAction<any>) => {
            const isDuplicate = state.products.some((item: any) => item.id === action.payload.id);
            if (!isDuplicate) {
                state.products.push(action.payload)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.pending, (state) => {

            })
            .addCase(fetchCartData.fulfilled, (state: any, action) => {
                state.products = action.payload
            })
            .addCase(fetchCartData.rejected, (state) => {

            })
    },
})

export const { pushProductInCart } = cartSlice.actions

export default cartSlice.reducer

