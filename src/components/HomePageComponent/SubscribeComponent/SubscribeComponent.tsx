import styles from "./SubscribeComponent.module.css";




const MailingBanner = () => {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.textBlock}>
                        <h3>Подпишитесь на новинки каталога</h3>
                        <p>Раз в пару недель вы будете получать дайджест новых интересных работ и художников. А в первом письме найдёте промо-код на первую покупку.</p>
                    </div>
                    <a>
                        <button className={styles.button}>
                            Подписаться на рассылку
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}


export default MailingBanner