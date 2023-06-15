"use client"
import {FC} from 'react'
import styles from './HomeSlider.module.css'
import {useSelector} from "react-redux";
import SlickSlider from "@/components/SlickSlider/SlickSlider";




const HomeSlider:FC = () => {

    const {slider} = useSelector((sl: any) => sl.slider)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };



    return (
        <div>
            <SlickSlider settings={settings}>
                {slider.map((slide: any) =>
                    <div key={slide.id}>
                        <div className={styles.parent}>
                            <div className={styles.div1}>
                                <img className={styles.mainSlideContainerImage} src={slide.img} alt=""/>
                            </div>
                            <div className={styles.div2}>
                                <h1 className={styles.sliderTitle} style={{color: `${slide.color}`}}>
                                    {slide.title}
                                </h1>
                                <p className={styles.sliderDescription} style={{color: `${slide.color}`}}>
                                    {slide.description}
                                </p>
                                <button style={{color: `${slide.color}`}}>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </SlickSlider>
        </div>
    )
}

export default HomeSlider



