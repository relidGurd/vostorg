'use client'
import {useEffect, useState} from "react";


const IsMobile = (maxWidth: number) => {
    const [windowSize, setWindowSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth < maxWidth);
        };

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [maxWidth]);

    return windowSize;
};


export default IsMobile