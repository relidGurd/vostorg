import styles from './HomeEditorial.module.css'
import Link from "next/link";


const HomeEditorial = () => {

    const testList = [
        {
            id: 1,
            title: '6 Artists Who Were Using Artificial Intelligence Before ChatGPT',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/gad.jpg'
        },
        {
            id: 2,
            title: 'The Artsy Advisor Notebook: June 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/poc.jpg'
        },
        {
            id: 3,
            title: 'Tania Marmolejo’s Wide-Eyed Portraits Are Capturing Collectors’ Attention',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/zhivopis.png'
        },
        {
            id: 4,
            title: 'Atlantic World Art Fair 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/11.jpg'
        },
        {
            id: 5,
            title: 'Latin American Galleries Now 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/vtube.jpg'
        },
        {
            id: 6,
            title: 'FOCUS Art Fair New York 2023',
            text: 'By Casey Lesser',
            date: 'Jun 7, 2023',
            img: 'http://localhost:3000/gulyanka.jpg'
        }
    ]

    return (
        <>
            <h1 className={styles.editorialTitle}>События VOSTORG</h1>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <img className={styles.image} src="http://localhost:3000/classic.jpg" alt=""/>
                    <h1>
                        5 Standout Shows at Small Galleries to Discover This June
                    </h1>
                    <p>
                        By Casey Lesser
                    </p>
                    <span>
                        Jun 7, 2023
                    </span>
                </div>
                <div className={styles.div2}>
                    <ul>
                        {testList.map(card => <li className={styles.listItemContainer}>
                            <img className={styles.image} src={card.img} alt=""/>
                            <h1>{card.title}</h1>
                            <p>{card.text}</p>
                            <span>{card.date}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default HomeEditorial