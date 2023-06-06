'use client'
import {FC} from "react";
import axios from "axios";


const SingleProduct: FC<{ product: any }> = ({product}) => {

    const sessionId = localStorage.getItem('basket')
    const handlerAddProduct = async () => {
        //@ts-ignore
        await axios.post('https://art-vostorg-store-test.up.railway.app/api/basket/add-product/', {
            url: product.url,
            quantity: 1
        }, {
            headers: {
                'session-id': sessionId
            }
        })
    }

    // useEffect(() => {
    //     fetch('https://art-vostorg-store-test.up.railway.app/api/baskets/62/').then(res => res.json()).then(data => console.log(data))
    // }, [handlerAddProduct])

    return (
        <div>
            <h1>
                {product.title}
            </h1>
            <span>
                {product.url}
            </span>
            <button onClick={handlerAddProduct}>Добавить в корзину</button>
        </div>
    )
}


export default SingleProduct

