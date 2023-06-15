import styles from './Footer.module.css'
import Logo from "@/components/Logo/LogoComponent";
import {VkIcon} from "@/icons/VkIcon";
import {TelegramIcon} from "@/icons/TelegramIcon";
import Link from "next/link";

const Footer = () => {




    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.firstFooterBlock}>
                    <div className={`container ${styles.firstFooterBlockContainer}`}>
                        <Link className={styles.logoFooter} rel='preload' href='/'>
                            <Logo />
                        </Link>
                        <h1 className={styles.firstFooterBlockTitle}>Современное искусство онлайн</h1>
                        <ul className={styles.firstFooterSocialsList}>
                            <li>
                                <TelegramIcon />
                            </li>
                            <li>
                                <VkIcon />
                            </li>
                        </ul>
                        <button>
                            Разместить работу +
                        </button>
                    </div>
                </div>
                <div>
                    <div className={`container ${styles.secondFooterBlockNavigationContainer}`}>
                        <div className={styles.secondFooterContent}>
                            <h3 className={styles.secondFooterContentBlockTitle}>art-vostorg@gmail.com</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>ИНН: 9703021385</li>
                                <li>ОГРН: 1207700425602</li>
                                <li>КПП: 770301001</li>
                            </ul>
                        </div>
                        <div className={styles.secondFooterContent}>
                            <h3 className={styles.secondFooterContentBlockTitle}>О нас</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>О VOSTORG</li>
                                <li>Подключиться к VOSTORG</li>
                                <li>Журнал</li>
                            </ul>
                        </div>
                        <div className={styles.secondFooterContent}>
                            <h3 className={styles.secondFooterContentBlockTitle}>Каталог</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>Работы</li>
                                <li>Художники</li>
                                <li>Галереи</li>
                                <li>Оплата и доставка</li>
                                <li>Оформление работ</li>
                                <li>Сертификаты</li>
                            </ul>
                        </div>
                        <div className={styles.secondFooterContent}>
                            <h3 className={styles.secondFooterContentBlockTitle}>Сервис</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>Консультация с куратором</li>
                                <li>Роспись стен</li>
                                <li>Дизайн от художника</li>
                            </ul>

                            <h3 className={styles.secondFooterContentBlockTitle}>Правила сервиса</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>Правила акции "Промокод"</li>
                                <li>Правила подарочного сертификата</li>
                            </ul>
                        </div>
                        <div className={styles.secondFooterContent}>
                            <h3 className={styles.secondFooterContentBlockTitle}>Сотрудничество</h3>
                            <ul className={styles.secondFooterContentList}>
                                <li>Сотрудничество с дизайнерами</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdFooter}>
                    <div className={`container`}>
                        <ul className={styles.thirdFooterListContainer}>
                            <li>
                                © 2023 ООО «VOSTORG»
                            </li>
                            <li>
                                <a href="/">
                                   Политика обработки персональных данных
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Правила использования сервиса
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer