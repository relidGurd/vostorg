import {getDataServices} from "@/services/getDataServices";
import {Metadata, ResolvingMetadata} from "next";
import SingleProduct from "@/components/SingleProduct/SindleProduct";

//
// type Props = {
//     params: { id: string };
//     searchParams: { [key: string]: string | string[] | undefined };
// };
//
// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent?: ResolvingMetadata,
// ): Promise<Metadata> {
//     // read route params
//     const id = params.id;
//     // fetch data
//     const product = await getDataServices.getSingleFakeProduct(id)
//
//     return {
//         title: product.title,
//     };
// }

export default async function SingleProductPage({ params }: any) {
    const data: any = await getDataServices.getSingleFakeProduct(params.id)
    return (
        <main>
            <SingleProduct product={data} />
        </main>
    )
}
