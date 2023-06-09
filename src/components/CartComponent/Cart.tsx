'use client'

import {useSelector} from "react-redux";

const Cart = ()=> {
    const {products} = useSelector((state: any) => state.cart)


    return (
        <div>
            {
                products.map((prod: any) => <div key={prod.id}>
                    {prod.title}
                </div>)
            }
        </div>
    )
}


export default Cart