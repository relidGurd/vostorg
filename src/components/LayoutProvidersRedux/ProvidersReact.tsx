'use client'
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {FC, useEffect} from "react";
import MenuComponent from "@/components/Menu/MenuComponent";
import Footer from "@/components/Footer/Footer";
import {AuthorizationToken} from "@/constants/constans";

const ProvidersReact: FC<{children: any}> = ({children}) => {

    // useEffect(() => {
    //     if (!localStorage.getItem('basket')) {
    //         fetch('https://art-vostorg-store-test.up.railway.app/api/basket/', {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': "FbgFil71EC7GymRSEMpsE0T2HBUTRu3g"
    //             }
    //         })
    //             .then(res => {
    //                 localStorage.setItem('basket', res.headers.get('session-id'))
    //                 return res.json()
    //             })
    //             .then(data => localStorage.setItem('basket-url', data.url))
    //     }
    // }, [])




    return (
        <Provider store={store}>
            <MenuComponent/>
                {children}
            <Footer />
        </Provider>
    )
}


export default ProvidersReact