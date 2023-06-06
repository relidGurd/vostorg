'use client'
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {FC, useEffect, useState} from "react";
import MenuComponent from "@/components/Menu/MenuComponent";
import axios from "axios";

const ProvidersReact: FC<{children: any}> = ({children}) => {

    useEffect(() => {
        if (!localStorage.getItem('basket')) {
            fetch('https://art-vostorg-store-test.up.railway.app/api/basket/', {
                method: 'GET',
                credentials: 'include'
            })
                .then(res => {
                    localStorage.setItem('basket', res.headers.get('session-id'))
                    return res.json()
                })
                .then(data => localStorage.setItem('basket-url', data.url))
        }
    }, [])

    return (
        <Provider store={store}>
            <MenuComponent/>
            {children}
        </Provider>
    )
}


export default ProvidersReact