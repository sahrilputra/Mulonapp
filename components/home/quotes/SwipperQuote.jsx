import React from 'react'
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import CardQuote from './cardQuote';
import "swiper/css";

const SwipperQuote = () => {
    return (
        <>

            <Swiper
                className={styles.mySwiper}
                spaceBetween={10}
                autoplay={{ delay: 3000 }}
                
            >
                <SwiperSlide><CardQuote /></SwiperSlide>
                <SwiperSlide><CardQuote /></SwiperSlide>
                <SwiperSlide><CardQuote /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwipperQuote