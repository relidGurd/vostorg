import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

type SliderItem = {
    id: number;
    title: string;
    description: string;
    img: string
};

type State = {
    slider: SliderItem[];
    loading: boolean;
};

const initialState: State = {
    slider: [
        {
            id: 1,
            title: '',
            description: '',
            img: 'http://localhost:3000/slide1.jpg'
        },
        {
            id: 2,
            title: '25',
            description: '',
            img: 'http://localhost:3000/slide3.webp'
        },
        {
            id: 3,
            title: '25',
            description: '',
            img: 'http://localhost:3000/slide2.webp'
        },
    ],
    loading: false
}

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        slider: (state: Draft<any>, action: PayloadAction<any>) => {
            const isDuplicate = state.products.some((item: any) => item.id === action.payload.id);
            if (!isDuplicate) {
                state.products.push(action.payload)
            }
        },
    },
})

export const {} = sliderSlice.actions

export default sliderSlice.reducer

