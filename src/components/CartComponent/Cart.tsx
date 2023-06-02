'use client'




import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Cart = ()=> {
    const {products} = useSelector(state => state.cart)


    return (
        <div>
            {
                products.map(prod => <div key={prod.id}>
                    {prod.title}
                </div>)
            }
        </div>
    )
}


export default Cart