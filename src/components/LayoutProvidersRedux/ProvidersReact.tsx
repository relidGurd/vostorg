'use client'
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {FC, useEffect} from "react";
import MenuComponent from "@/components/Menu/MenuComponent";
import Footer from "@/components/Footer/Footer";
import {AuthorizationToken} from "@/constants/constans";

const ProvidersReact: FC<{children: any}> = ({children}) => {

    return (
        <Provider store={store}>
            <MenuComponent/>
                {children}
            <Footer />
        </Provider>
    )
}


export default ProvidersReact