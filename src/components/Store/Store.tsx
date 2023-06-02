import SingleProduct from "@/components/SingleProduct/SindleProduct";
import {getDataServices} from "@/services/getDataServices";
import Link from "next/link";


const Store = async ({data}) => {

    return (
        <div>
            {
                data.map(product =>
                    <Link href={`/store/${product.id}`}>
                        <SingleProduct product={product} />
                    </Link>
                   )
            }
        </div>
    )
}


export default Store