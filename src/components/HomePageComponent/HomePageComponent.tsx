import SliderSlick from "@/components/HomePageComponent/SliderSlick/SliderSlick";
import AboutUsHome from "@/components/HomePageComponent/HomeEditorial/HomeEditorial";
import styles from './Home.module.css'
import Featured from "@/components/HomePageComponent/Featured/Featured";
import SubscribeComponent from "@/components/HomePageComponent/SubscribeComponent/SubscribeComponent";



const HomePageComponent = async () => {

    return (
        <>
            <section>
                <SliderSlick />
            </section>

            <section>
                <Featured />
            </section>

            <section>
                <AboutUsHome />
            </section>

            <section>
                <SubscribeComponent />
            </section>

        </>
    )
}


export default HomePageComponent