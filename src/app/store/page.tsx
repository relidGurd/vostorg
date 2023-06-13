import {getDataServices} from "@/services/getDataServices";
import {Metadata} from "next";
import Link from "next/link";
import styles from "./Store.module.css";
import ProductMini from "@/components/ProductMini/ProductMini";

export const metadata: Metadata = {
    title: 'Магазин VOSTORG'
}




export default async function StorePage() {
    const data = await getDataServices.getAllFakeProducts()


    return (
        <main style={{marginTop: '83px'}} className='container'>
            <div>
                <span><Link href='/'>Главная</Link></span> >
                <span><Link href='/store'> Магазин</Link></span>
            </div>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    Фильтры
                </div>
                <ul className={styles.div2}>
                    {
                        data.map((product: any) =>
                            <li key={product.id}>
                                <Link href={`/store/${product.id}`}>
                                    <ProductMini product={product} />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </main>
    )
}




// const sessionId = localStorage.getItem('basket')
// useEffect(() => {
//     //@ts-ignore
//     fetch('https://art-vostorg-store-test.up.railway.app/api/basket/', {
//         headers: {
//             'session-id': sessionId
//         }
//     })
//         .then(res => res.json())
//         .then(r => fetch(r.lines, {headers: {'session-id': sessionId}}).then(res => res.json()).then(rr => console.log(rr)))
//
// }, [sessionId])


// {
//     "basket": "http://localhost:8000/api/baskets/56/",
//     "guest_email": "foo@example.com",
//     "shipping_address": {
//     "country": "http://127.0.0.1:8000/api/countries/RU/",
//         "first_name": "Михаил",
//         "last_name": "Федоров",
//         "line1": "ул. Советская, д.6",
//         "line2": "",
//         "notes": "Позвонить!!!!",
//         "phone_number": "+79158663369",
//         "state": "Москва"
// }
//
// const sendOrder = async () => {
//     //@ts-ignore
//     await axios.post('https://art-vostorg-store-test.up.railway.app/api/checkout/', {
//         basket: localStorage.getItem('basket-url'),
//         guest_email: 'titarevdeniz@yandex.ru',
//         shipping_address: {
//             country: 'http://127.0.0.1:8000/api/countries/RU/',
//             first_name: 'Кабачелло',
//             last_name: 'Валуев',
//             line1: 'Уругвайская улица 666, к. 6',
//             line2: '',
//             notes: 'Позвонить!!!!',
//             phone_number: '+79267089332',
//             state: 'Москва'
//         }
//
//         },
//         {
//             headers: {
//                 'session-id': sessionId
//             }
//         })
//     localStorage.clear()
//     location.reload()
// }