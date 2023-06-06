import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: Object
}

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
})

export const { pushProductInCart } = cartSlice.actions

export default cartSlice.reducer

