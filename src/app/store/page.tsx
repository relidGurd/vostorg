import {getDataServices} from "@/services/getDataServices";
import Store from "@/components/Store/Store";
import {Metadata} from "next";
import Link from "next/link";
import {CartIcon} from "@/icons/CartIcon";

export const metadata: Metadata = {
    title: 'Магазин VOSTORG'
}




export default async function StorePage() {
    const data = await getDataServices.getAllFakeProducts()
    return (
        <main>
            <Link href='/order'>
                <CartIcon />
            </Link>
            <Store data={data}/>
        </main>
    )
}
