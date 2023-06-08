import {getDataServices} from "@/services/getDataServices";
import Store from "@/components/Store/Store";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Магазин VOSTORG'
}




export default async function StorePage() {
    const data = await getDataServices.getAllFakeProducts()
    return (
        <main style={{marginTop: '83px'}} className='container'>
            <Store data={data}/>
        </main>
    )
}
