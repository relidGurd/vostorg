'use client'

import {useSelector} from "react-redux";

const Cart = ()=> {
    const {products} = useSelector((state: any) => state.cart)


    return (
        <>
            <section>
                <h1>
                    Корзина
                </h1>
                {
                    products.map((prod: any) => <div key={prod.id}>
                        {prod.title}
                    </div>)
                }
            </section>
        </>
    )
}


export default Cart