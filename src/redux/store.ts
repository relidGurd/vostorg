import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "@/redux/CartSlice/CartSlice";
import sliderSlice from "@/redux/SliderSlice/SliderSlice";
import menuSlice from "@/redux/MenuSlice/MenusSlice";


export const store = configureStore({
    reducer: {
        menu: menuSlice,
        slider: sliderSlice,
        cart: cartSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

