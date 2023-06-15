import styles from './Featured.module.css'
import {defaultURL} from "@/constants/constans";




const Featured = () => {


    return (
        <>
            <h1>Featured</h1>
            <ul className={styles.featuredList}>
                <li className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${defaultURL}/1.webp`} alt=""/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h2>Latin American Galleries Now</h2>
                    </div>
                </li>
                <li className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${defaultURL}/2.webp`} alt=""/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h2>Atlantic World Art Fair</h2>
                    </div>
                </li>
                <li className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${defaultURL}/3.webp`} alt=""/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h2>JINGART</h2>
                    </div>
                </li>
                <li className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`${defaultURL}/4.webp`} alt=""/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h2>Eye of the Collector</h2>
                    </div>
                </li>
            </ul>
        </>
    )
}


export default Featured