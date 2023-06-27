import styles from './StorePage.module.css'
import {Metadata} from "next";
import {defaultURL} from "@/constants/constans";

export const metadata: Metadata = {
    title: 'Заказать роспись поверхностей и подбор картин в интерьер — Арт-объединение Vostorg'
}




export default async function StorePage() {


    return (
        <main style={{marginTop: '100px'}} className='container'>
            <section className={styles.parent}>
                <div className={styles.div1}>
                    <img className={styles.imageContainer} src={`${defaultURL}/slide2.jpg`} alt=""/>
                </div>
                <div className={styles.div2}>
                    <h1 className={styles.title}>
                        Подбор картин в интерьер и роспись поверхностей
                    </h1>
                    <ul className={styles.butList}>
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
                    <p className={styles.desc}>
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
            <section>

            </section>
        </main>
    )
}

