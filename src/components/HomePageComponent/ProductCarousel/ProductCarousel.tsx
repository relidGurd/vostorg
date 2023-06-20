'use client'
import React, {useEffect, useState} from "react";
import styles from './ProductCarousel.module.css'
import SlickSlider from "@/components/SlickSlider/SlickSlider";
import Link from "next/link";
import ProductMini from "@/components/ProductMini/ProductMini";
import isMobile from "@/hooks/IsMobile";


const ProductCarousel = ({data, title}) => {
    const mobile = isMobile(494)

    const settings = {
        className: `slider variable-width`,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        speed: 500,
        draggable: false,
        adaptiveHeight: mobile,
    };


    return (
        <>
            <h1>{title}</h1>


            <SlickSlider isNavigation={true} settings={settings}>
                {data.map((product: any) =>
                    <Link key={product.id} className={styles.container} href={`/store/${product.id}`}>
                        <ProductMini product={product} isCarousel={true}/>
                    </Link>
                )}
            </SlickSlider>
        </>
    )
}

export default ProductCarousel