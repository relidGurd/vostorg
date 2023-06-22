import styles from './HomeEditorial.module.css'
import {defaultImageUrl, defaultURL} from "@/constants/constans";
import {getDataServices} from "@/services/getDataServices";
import Link from "next/link";



const HomeEditorial = async () => {
    const {data} = await getDataServices.getPosts()
    const testList = [
        {
            id: 1,
            title: '6 Artists Who Were Using Artificial Intelligence Before ChatGPT',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/gad.jpg`
        },
        {
            id: 2,
            title: 'The Artsy Advisor Notebook: June 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/poc.jpg`
        },
        {
            id: 3,
            title: 'Tania Marmolejo’s Wide-Eyed Portraits Are Capturing Collectors’ Attention',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/zhivopis.png`
        },
        {
            id: 4,
            title: 'Atlantic World Art Fair 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/11.jpg`
        },
        {
            id: 5,
            title: 'Latin American Galleries Now 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/vtube.jpg`
        },
        {
            id: 6,
            title: 'FOCUS Art Fair New York 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: `${defaultURL}/gulyanka.jpg`
        }
    ]


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