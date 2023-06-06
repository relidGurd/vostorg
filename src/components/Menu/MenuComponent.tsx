import {FC} from "react";
import styles from './MenuComponent.module.css'
import {useSelector} from "react-redux";
import Link from "next/link";

const MenuComponent:FC = () => {
    const menu = useSelector((navbar: any) => navbar.menu.menu)
    return (
        <nav>

            <ul>
                {menu.link.map((menuLinks: any, index: any) => <li key={index}><Link rel="preload" href={menuLinks.url}>{menuLinks.name}</Link></li>)}
            </ul>
            {menu.contacts.phone}
        </nav>
    )
}

export default MenuComponent