import React from 'react'
import styles from './styles.module.scss'
import { RiArrowDropRightLine } from "react-icons/ri";
import Image from 'next/image'
import CardBenefit from './cards/CardBenefit';
const MainHero = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.main__hero}>
                    <div className={styles.content}>
                        <h1>Smart Waste Management Untuk Kota Lebih <span className='secondary'>Bersih</span></h1>
                        <p className='bodyText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nihil eum suscipit modi, quaerat provident. Quis dignissimos ratione amet voluptas!</p>
                        <button className='primary_button'>Hubungi Kami Sekarang <RiArrowDropRightLine size={20} fill='#ffff'/> </button>
                    </div>
                    <div className={styles.imageContent}>
                        <Image
                            src={"/assets/vector/hero.svg"}
                            alt='hero image'
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.card__container}>
                        <div className={styles.card__textContent}>
                            <h1>Dapat Banyak
                                <span className='secondary'> Manfaat</span> Dengan
                                Layanan <span className='secondary'>Kami</span></h1>
                            <p className='bodyText text-white'>Berbagai Manfaat dan keunggulan kami dengan layanan penjemputan sampah yang handal, bersama kita jaga lingkungan kita agar tetap bersih dan sehat</p>
                        </div>
                        <div className={styles.card__imageSwipper}>
                            <div className={styles.card__items}>
                                <CardBenefit />
                                <CardBenefit />
                                <CardBenefit />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHero