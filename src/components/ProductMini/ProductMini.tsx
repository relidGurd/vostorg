import {defaultURL} from "@/constants/constans";
import {FC} from "react";
import styles from './ProductMini.module.css'


const ProductMini: FC<{ product: any }> = ({product}) => {

    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>
                <img className={styles.productImageContainer} src={`${defaultURL}/3.webp`} alt=""/>
            </div>
            <div>
                <h1>
                    {product.title}
                </h1>
                <p>
                    {product.author}
                </p>
                <p>
                    {`${product.price.incl_tax} ${product.price.currency}`}
                </p>
            </div>
        </div>
    )
}

export default ProductMini