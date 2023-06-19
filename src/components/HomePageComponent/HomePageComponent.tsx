import HomeSlider from "@/components/HomePageComponent/HomeSlider/HomeSlider";
import AboutUsHome from "@/components/HomePageComponent/HomeEditorial/HomeEditorial";
import Featured from "@/components/HomePageComponent/Featured/Featured";
import SubscribeComponent from "@/components/HomePageComponent/SubscribeComponent/SubscribeComponent";
import ProductCarousel from "@/components/HomePageComponent/ProductCarousel/ProductCarousel";
import {getDataServices} from "@/services/getDataServices";



const HomePageComponent = async () => {
    const {data} = await getDataServices.getAllFakeProducts()

    return (
        <>
            <section>
                <HomeSlider />
            </section>

            <section>
                <Featured />
            </section>

            <section>
                <ProductCarousel title={'Новые картины'} data={data} />
            </section>

            <section>
                <AboutUsHome />
            </section>

            <section>
                <SubscribeComponent />
            </section>


            <section>
                <ProductCarousel title={'Текущие выставки'} data={data} />
            </section>

            <section>
                <ProductCarousel title={'Наш выбор'} data={data} />
            </section>



            <section>
                <SubscribeComponent />
            </section>

        </>
    )
}


export default HomePageComponent