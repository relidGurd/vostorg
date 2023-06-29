import {getDataServices} from "@/services/getDataServices";
import {Metadata, ResolvingMetadata} from "next";
import {DetailProduct} from "@/components/DetailProduct/DetailProduct";

//
// type Props = {
//     params: { id: string };
//     searchParams: { [key: string]: string | string[] | undefined };
// };
//
export async function generateMetadata(
    { params, searchParams },
    parent?: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const id = params.id;


    const { data } = await getDataServices.getSingleFakeProduct(id)

    return {
        title: data.attributes.title,
    };
}

export default async function SingleProductPage({params}: any) {
    const {data}: any = await getDataServices.getSingleFakeProduct(params.id)

    return (
        <main className='container' style={{marginTop: '83px'}}>
            <DetailProduct prod={data} />
        </main>
    )
}
