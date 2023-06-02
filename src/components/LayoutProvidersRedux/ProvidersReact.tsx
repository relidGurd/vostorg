'use client'
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {useEffect} from "react";
import {json} from "stream/consumers";
import MenuComponent from "@/components/Menu/MenuComponent";

const ProvidersReact = ({children}) => {

    useEffect(() => {
        localStorage.setItem('test', JSON.stringify([{cartID: 123}]))
    }, [])


    return (
        <Provider store={store}>
            <MenuComponent />
            {children}
        </Provider>
    )
}



export default ProvidersReact