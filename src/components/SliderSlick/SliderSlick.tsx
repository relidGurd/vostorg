"use client"
import {FC, useRef} from 'react'
import './slickStyles.css'
import Slider from 'react-slick'
import Image from "next/image";
import styles from './slider.module.css'
import {useSelector} from "react-redux";


const SliderSlick:FC = () => {

    const {slider} = useSelector(sl => sl.slider)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderRef = useRef(null)

    const handleNext = () => {
        if (sliderRef.current) {
            //@ts-ignore
            sliderRef.current.slickPrev()
        }
    }

    return (
        <div className={styles.container}>
            <Slider ref={sliderRef} {...settings}>
                {slider.map((slide: any) =>
                    <div key={slide.id}>
                        <div style={{height:"600px", backgroundImage: `url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: "center"}}>
                            <div className={styles.contentSlideContainer}>
                                <h1 style={{color: `${slide.textColor}`}}>
                                    {slide.title}
                                </h1>
                                <p style={{color: `${slide.textColor}`}}>
                                    {slide.text}
                                </p>
                                <button style={{color: `${slide.textColor}`}}>
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