import {getDataServices} from "@/services/getDataServices";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import {Metadata, ResolvingMetadata} from "next";

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
        <main style={{marginTop: '83px'}}>

            <div className='container'>
                <h1>
                    {data.attributes.title}
                </h1>
                <span>
                    {data.attributes.price} р.
                </span>
                <ButtonComponent urlEndpoint={'add-product'}>Добавить в корзину</ButtonComponent>
            </div>

            {/*<ButtonComponent product={data} />*/}
        </main>
    )
}
