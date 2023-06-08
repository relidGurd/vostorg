import Cart from "@/components/CartComponent/Cart";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Оформление заказа | ARTVOSTORG',
    description: 'Творчество наше второе имя',
};

export default async function () {
    return (
        <Cart />
    )
}