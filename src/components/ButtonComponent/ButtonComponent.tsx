'use client'
import {FC} from "react";
import axios from "axios";
import {AuthorizationToken} from "@/constants/constans";


interface IButton {
    children: string;
    urlEndpoint: string;
}

const ButtonComponent: FC<IButton> = ({children, urlEndpoint}) => {
//add-product
    const sessionId = localStorage.getItem('basket')
    const handlerAddProduct = async () => {
        //@ts-ignore
        await axios.post(`https://art-vostorg-store-test.up.railway.app/api/basket/${urlEndpoint}/`, {
            url: product.url,
            quantity: 1
        }, {
            headers: {
                'session-id': sessionId,
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

