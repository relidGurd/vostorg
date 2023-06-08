import styles from './Featured.module.css'




const Featured = () => {


    return (
        <>
            <h1>Featured</h1>
            <ul className={styles.featuredList}>
                <li className={styles.card}>
                    <img className={styles.image} src="http://localhost:3000/1.webp" alt=""/>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h1>Latin American Galleries Now</h1>
                    </div>
                </li>
                <li className={styles.card}>
                    <img className={styles.image} src="http://localhost:3000/2.webp" alt=""/>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h1>Atlantic World Art Fair</h1>
                    </div>
                </li>
                <li className={styles.card}>
                    <img className={styles.image} src="http://localhost:3000/3.webp"  alt=""/>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h1>JINGART</h1>
                    </div>
                </li>
                <li className={styles.card}>
                    <img className={styles.image} src="http://localhost:3000/4.webp"  alt=""/>
                    <div className={styles.descriptionBlock}>
                        <span>Featured Fair</span>
                        <h1>Eye of the Collector</h1>
                    </div>
                </li>
            </ul>
        </>
    )
}


export default Featured