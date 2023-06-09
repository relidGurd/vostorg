import {FC, useEffect} from "react";
import styles from './MenuComponent.module.css'
import {useSelector} from "react-redux";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Logo from "@/components/Logo/LogoComponent";
import Search from "@/components/SearchComponent/Search";
import {CartIcon} from "@/icons/CartIcon";
import {TelephoneIcon} from "@/icons/TelephoneIcon";
import {TelegramIconSecondary} from "@/icons/TelegramIconSecondary";
import IsMobile from "@/hooks/IsMobile";
import {BurgerIcon} from "@/icons/BurgerIcon";


const MenuComponent: FC = () => {
    const menu = useSelector((navbar: any) => navbar.menu.menu)
    const pathname = usePathname()
    const mobile = IsMobile(1329)



    return (
        <nav className={styles.block}>
            {mobile ?
                <div className={`container ${styles.container}`}>
                    <Link rel='prefetch' href='/'>
                        <Logo/>
                    </Link>
                    <button>
                        <BurgerIcon />
                    </button>
                </div>
                :
                <div className={`container ${styles.container}`}>
                    <Link rel='prefetch' href='/'>
                        <Logo/>
                    </Link>
                    <Search/>
                    <ul className={styles.menuContainer}>
                        {menu.link.map((menuLinks: any, index: any) => {
                                const isActive = pathname === menuLinks.url
                                return (
                                    <li key={index}><Link className={`${styles.links} ${isActive ? styles.activeLink : ''}`}
                                                          rel="prefetch"
                                                          href={menuLinks.url}>{menuLinks.name.toUpperCase()}</Link></li>
                                )
                            }
                        )}
                    </ul>

                    <div className={styles.buttonsContainer}>
                        <button>
                            {menu.buttons.choosePicture}
                        </button>
                        <button>
                            {menu.buttons.consultant}
                        </button>
                    </div>

                    <ul className={styles.socialsContainer}>
                        <li>
                            <a href={`tel:${menu.contacts.phone}`}>
                                <TelephoneIcon/>
                            </a>
                        </li>
                        <li>
                            <a href={menu.contacts.telegram}>
                                <TelegramIconSecondary/>
                            </a>
                        </li>
                    </ul>
                    <CartIcon/>
                </div>
            }
        </nav>
    )
}

export default MenuComponent