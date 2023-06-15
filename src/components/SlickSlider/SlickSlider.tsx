"use client"
import React, {FC, useRef} from 'react'
import './SliderStyles.css'
import Slider from 'react-slick'
import Link from "next/link";


export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


interface ISlickSettings {
    children: React.ReactNode
    settings: {
        dots?: boolean,
        infinite?: boolean,
        speed?: number,
        slidesToShow?: number,
        slidesToScroll?: number,
        autoplay?: boolean,
        autoplaySpeed?: number,
        className?: string,
        variableWidth?: boolean
        centerMode?: boolean,
        draggable?: boolean,
        nextArrow?: React.ReactNode,
        prevArrow?: React.ReactNode,
        adaptiveHeight?: boolean,
        categoryStoreUrl?: string,
    },
    isNavigation?: boolean,
}



const SlickSlider:FC<ISlickSettings> = ({children, settings, isNavigation, categoryStoreUrl}) => {

    // const SliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // };


    const sliderRef = useRef(null)

    const handleNext = () => {
        if (sliderRef.current) {
            //@ts-ignore
            sliderRef.current.slickNext()
        }
    }

    const handlePrev = () => {
        if (sliderRef.current) {
            //@ts-ignore
            sliderRef.current.slickPrev()
        }
    }

    return (
        <div>
            {
                isNavigation ?
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Link href={categoryStoreUrl ? `/store/${categoryStoreUrl}` : '/store'}>
                            Смотреть все
                        </Link>
                        <div>
                            <button onClick={handlePrev}>
                                Назад
                            </button>
                            <button onClick={handleNext}>
                                Вперед
                            </button>
                        </div>
                    </div>
                    :
                    <></>
            }
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default SlickSlider



