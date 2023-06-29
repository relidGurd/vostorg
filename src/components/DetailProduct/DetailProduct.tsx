'use client'
import styles from "./DetailProduct.module.css";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {defaultImageUrl} from "@/constants/constans";
import {useDispatch} from "react-redux";
import {pushProductInCart} from "@/redux/CartSlice/CartSlice";




interface Product {
    name: string;
    image: string;
    author: string;
    size: string;
    price: number;
    category: string;
}

export const DetailProduct = ({prod}) => {

    console.log(prod)

    const dispatch = useDispatch()

    const handleAddInCart = () => {
        dispatch(pushProductInCart(prod))
    }


    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>

                        <div className={styles.imageBlock}>
                            <img src={`${defaultImageUrl}${prod.attributes.image.data.attributes.url}`} alt=""/>
                        </div>


                        <div className={styles.aboutProductContainer}>
                            <div className={styles.wishContactsContainer}>
                                <div>
                                    Добавить в избранное
                                </div>
                                <div>
                                    Связаться с куратором
                                </div>
                            </div>

                            <h1>{prod.attributes.title}</h1>
                            <p>см</p>
                            <Link href={'/'} className={styles.authorMore} to='/'></Link>
                            <ul className={styles.categoriesList}>
                                {prod.attributes.product_categories.data.map(category =>
                                <li key={category.id}>
                                    {category.attributes.title}
                                </li>)}
                            </ul>
                            <div>
                                <button onClick={handleAddInCart} className={styles.addToCartButton}>
                                    КУПИТЬ ЗА {prod.attributes.price} ₽</button>
                            </div>
                        </div>}
            </div>

            <div className={styles.secondaryAbout}>
                <div className={styles.secondaryAboutFirstBlock}>
                    <h1>
                         О работе
                    </h1>
                    <ul className={styles.afterMainAboutProduct}>
                        <li>
                            <div>
                                Год создания работы:
                            </div>
                            <div>
                                2023 г.
                            </div>
                        </li>
                        <li>
                            <div>
                                Размер:
                            </div>
                            <div>

                            </div>
                        </li>
                        <li>
                            <div>
                                Категория и техника:
                            </div>
                            <div>

                            </div>
                        </li>
                        <li>
                            <div>
                                Уникальность работы:
                            </div>
                            <div>
                                Уникальная работа
                            </div>
                        </li>
                        <li>
                            <div>
                                Город:
                            </div>
                            <div>
                                Москва
                            </div>
                        </li>
                        <li>
                            <div>
                               Стоимость работы:
                            </div>
                            <div>

                            </div>
                        </li>
                        <li>
                            <div>
                                Оформление:
                            </div>
                            <div>
                                Подрамник
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 style={{marginBottom: '35px'}}>
                        О художнике
                    </h1>
                    <div>
                        <div className={styles.authorImage}>
                            <img src="http://localhost:5000/public/user.jpg" alt=""/>
                        </div>
                        <h2 style={{marginTop: '35px', marginBottom: '35px'}}>

                        </h2>
                        <p className={styles.productAuthorDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam at atque commodi deleniti doloribus, inventore magni possimus quasi qui quos reprehenderit sequi similique, soluta sunt ut! Dolores, doloribus?
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}