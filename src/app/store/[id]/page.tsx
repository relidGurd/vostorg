import {getDataServices} from "@/services/getDataServices";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

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
        <main style={{marginTop: '83px'}}>

            <div className='container'>
                <h1>
                    {data.title}
                </h1>
                <span>
                {data.url}
            </span>
                <ButtonComponent urlEndpoint={'add-product'}>Добавить в корзину</ButtonComponent>
            </div>

            {/*<ButtonComponent product={data} />*/}
        </main>
    )
}
