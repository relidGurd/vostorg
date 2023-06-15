'use client'
import {FC, useEffect, useState} from "react";
import axios from "axios";
import {AuthorizationToken} from "@/constants/constans";


interface IButton {
    url: string;
    children: string;
    urlEndpoint: string;
}

const ButtonComponent: FC<IButton> = ({children, urlEndpoint, url}) => {
//add-product
    const [session, setSession] = useState('')

    useEffect(() => {
        if(localStorage.getItem('basket')) {
            const sessionId = localStorage.getItem('basket')
            setSession(sessionId)
        }
    }, [])

    const handlerAddProduct = async () => {
        //@ts-ignore
        await axios.post(`https://art-vostorg-store-test.up.railway.app/api/basket/${urlEndpoint}/`, {
            url: url,
            quantity: 1
        }, {
            headers: {
                'session-id': session,
                'Authorization': AuthorizationToken
            }
        })
    }

    // useEffect(() => {
    //     fetch('https://art-vostorg-store-test.up.railway.app/api/baskets/62/').then(res => res.json()).then(data => console.log(data))
    // }, [handlerAddProduct])

    return (
        <button onClick={handlerAddProduct}>
            {children}
        </button>
    )
}


export default ButtonComponent

