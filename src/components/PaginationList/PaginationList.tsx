"use client"
import {FC, useState} from "react";
import styles from './Pagination.module.css'





const PaginationList: FC = ({data}) => {
    const test = (id) => {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.split("?")[0];
        window.location.href = `${newUrl}?page=${id}`;
    }

    const testList = [
        1, 2, 3, 4, 5, 6
    ]


    return (
        <ul style={{display: 'flex'}}>
            {testList.map(pagNum => <li className={styles.pagItem}>
                {pagNum}
            </li>)}
        </ul>
    )
}

export default PaginationList