import Cart from "@/components/CartComponent/Cart";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Оформление заказа | ART-VOSTORG',
    description: 'Творчество наше второе имя',
};

export default async function () {



    return (
        <main style={{marginTop: '83px'}} className='container'>
            <Cart />
        </main>
    )
}