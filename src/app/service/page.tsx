import styles from './StorePage.module.css'
import {Metadata} from "next";
import {defaultURL} from "@/constants/constans";

export const metadata: Metadata = {
    title: 'Заказать роспись поверхностей и подбор картин в интерьер — Арт-объединение Vostorg'
}




export default async function StorePage() {


    return (
        <main style={{marginTop: '83px'}} className='container'>
            <section>
                <div>
                    <img src={`${defaultURL}/servicesslide.png`} alt=""/>
                </div>
                <div>
                    <h1>
                        Подбор картин в интерьер и роспись поверхностей
                    </h1>
                    <ul>
                        <li>
                            Офромить дом
                        </li>
                        <li>
                            Оформить офис
                        </li>
                        <li>
                            Оформить кафе
                        </li>
                        <li>
                            Оформить магазин
                        </li>
                    </ul>
                    <p>
                        Бесплатно подберем картины и объекты в существующий или запланированный интерьер, украсим пространство художественной росписью, оформим помещение под ключ
                    </p>
                    <div>
                        <button>
                            Закзать
                        </button>
                        <button>
                            Хочу спросить
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

