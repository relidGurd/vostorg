import {defaultURL} from "@/constants/constans";
import {FC} from "react";
import styles from './ProductMini.module.css'
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

interface IProductMini {
    product: any,
    isCarousel: boolean
}


const ProductMini: FC<IProductMini> = ({product, isCarousel}) => {
    return (
        <div className={styles.container}>
            <div className={!isCarousel ? styles.productContainer : styles.productContainerForCarousel}>
                <img className={!isCarousel ? styles.productImageContainer : styles.productImageForCarousel} src={!product.images[0] ? `${defaultURL}/4.webp` : product.images[0].original} alt=""/>
            </div>
            <div>
                <h2>
                    {product.title}
                </h2>
                <p>
                    {product.author}
                </p>
                <p>
                    {`${product.price.incl_tax} ${product.price.currency}`}
                </p>
                <ButtonComponent url={product.url} urlEndpoint={'add-product'}>Конпка</ButtonComponent>
            </div>
        </div>
    )
}

export default ProductMini