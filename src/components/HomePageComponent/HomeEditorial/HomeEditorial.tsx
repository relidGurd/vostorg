import styles from './HomeEditorial.module.css'
import {defaultImageUrl, defaultURL} from "@/constants/constans";
import {getDataServices} from "@/services/getDataServices";
import Link from "next/link";



const HomeEditorial = async () => {
    const {data} = await getDataServices.getPosts('&?pagination[page]=1&pagination[pageSize]=6')

    return (
        <>
            <h1>События VOSTORG</h1>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <img className={styles.image} src={`${defaultURL}/classic.jpg`} alt=""/>
                    <h2>
                        {data[0].attributes.title}
                    </h2>
                    <p>
                        By Casey Lesser
                    </p>
                    <span>
                        Jun 7, 2023
                    </span>
                </div>
                <div className={styles.div2}>
                    <ul>
                        {data.map(card => {
                            const imageUrl = card.attributes.preview.data.attributes.url

                            return (
                                <li className={styles.listItemContainer}>
                                    <Link href={`/news/${card.id}`}>
                                        <img className={styles.image} src={`${defaultImageUrl}${imageUrl}`} alt=""/>
                                        <h2>{card.attributes.title}</h2>
                                        <p>{card.attributes.description}</p>
                                        <span>{card.attributes.publishedAt}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default HomeEditorial