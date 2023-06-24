"use client"
import {defaultImageUrl} from "@/constants/constans";
import {FC} from "react";
import styles from './ProductMini.module.css'
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

interface IProductMini {
    product: any,
    isCarousel: boolean
}


const ProductMini: FC<IProductMini> = ({product, isCarousel}) => {
    const image = product.attributes.image


    return (
        <div className={styles.container}>
            <div className={!isCarousel ? styles.productContainer : styles.productContainerForCarousel}>
                <img className={!isCarousel ? styles.productImageContainer : styles.productImageForCarousel} src={`${defaultImageUrl}${image.data.attributes.url}`} alt=""/>
            </div>
            <div>
                <h2>
                    {product.attributes.title}
                </h2>
                <p>
                    {product.attributes.date}
                </p>
                <p>
                    {product.attributes.price}
                </p>
                <ButtonComponent url={product.url} urlEndpoint={'add-product'}>Конпка</ButtonComponent>
            </div>
        </div>
    )
}

export default ProductMini