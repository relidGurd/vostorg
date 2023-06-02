'use client'
import {FC} from "react";
import {useDispatch} from "react-redux";
import {pushProductInCart} from "@/redux/CartSlice/CartSlice";




const SingleProduct:FC = ({product}) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(pushProductInCart(product))
    }



    return (
        <div>
            <h1>
                {product.title}
            </h1>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    )
}


export default SingleProduct

