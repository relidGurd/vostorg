"use client"
import {FC, useRef} from 'react'
import './slickStyles.css'
import Slider from 'react-slick'
import Image from "next/image";
import styles from './slider.module.css'
import {useSelector} from "react-redux";


const SliderSlick:FC = () => {

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

    const sliderRef = useRef(null)

    const handleNext = () => {
        if (sliderRef.current) {
            //@ts-ignore
            sliderRef.current.slickPrev()
        }
    }

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {slider.map((slide: any) =>
                    <div key={slide.id}>
                        <div className={styles.mainSlideContainer}>
                            <div className={styles.mainSlideContainerImageBlock}>
                                <img className={styles.mainSlideContainerImage} src={slide.img} alt=""/>
                            </div>
                            <div className={styles.contentSlideContainer}>
                                <h1 style={{color: `${slide.color}`}}>
                                    {slide.title}
                                </h1>
                                <p style={{color: `${slide.color}`}}>
                                    {slide.description}
                                </p>
                                <button style={{color: `${slide.color}`}}>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default SliderSlick