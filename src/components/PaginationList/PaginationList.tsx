"use client"
import {FC, useState} from "react";
import {usePathname} from "next/navigation";





const PaginationList: FC = ({data}) => {
    const pathname = usePathname()

    console.log(pathname)

    const test = (id) => {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.split("?")[0];
        window.location.href = `${newUrl}?page=${id}`;
    }
    console.log(window.location.href)
    return (
        <ul style={{display: 'flex', justifyContent: "space-between"}}>
            <li>
                <button onClick={() => test(1)}>
                    1
                </button>
            </li>
            <li>
                <button onClick={() => test(2)}>
                    2
                </button>
            </li>
            <li>
                <button onClick={() => test(3)}>
                    3
                </button>
            </li>

        </ul>
    )
}

export default PaginationList