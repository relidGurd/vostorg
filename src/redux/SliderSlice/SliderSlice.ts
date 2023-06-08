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
            title: '/HAPPINESS IS…/ Solo exhibition WHATOONEE!',
            description: '25.05-04.06 будет проходить персональная выставка WHATOONEE в галерее DEBOSH',
            img: 'http://localhost:3000/slide3.jpg',
            color: 'white'
        },
        {
            id: 2,
            title: 'ТВОРЧЕСКИЙ ПЕРЕПОЛОХ',
            description: 'Совместно с Молодёжным парламентом Хорошевского района мы проводим фестиваль «Творческий переполох» в честь Дня Защиты детей.',
            img: 'http://localhost:3000/slide2.jpg',
            color: 'white'
        },
        {
            id: 3,
            title: '29 мая в FINEART GALLERY открывается выставочный проект «Отпечатки души».',
            description: 'Коллекция работ открывет серию выставок, которая демонстрирует результаты применения инновационных методов реабилитации, развите доступной инклюзивной среды для детей с ограниченными возможностями здоровья и нейроотличиями.',
            img: 'http://localhost:3000/slide1.jpg',
            color: 'white'
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

