import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'


const initialState = {
    menu: {
        link: [
            {
                name: '',
                url: '',
            },
        ],
        logo: 'logo image',
        search: [],
        buttons: {
            choosePicture: 'Сервис по подбору работ',
            consultant: 'Арт-консультант'
        },
        contacts: {
          phone: '+79260789332',
          telegram: 'ссылка на телегу',
          whatsUp: 'сслыка на вотсап',
        }
    },
    loading: false
}

export const menuSlice = createSlice({
    name: 'menu',
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

export const {} = menuSlice.actions

export default menuSlice.reducer

