import {FC} from "react";
import styles from './MenuComponent.module.css'
import {useSelector} from "react-redux";

const MenuComponent:FC = () => {
    const menu = useSelector(navbar => navbar.menu.menu)
    return (
        <div>
            {menu.contacts.phone}
        </div>
    )
}

export default MenuComponent