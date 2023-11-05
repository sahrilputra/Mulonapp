'use client';
import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import CardServices from './cards/CardServices';
import TimeLines from './timeline/TimeLines';
import Feedback from './Feedback';
const AboutLayout = () => {
    return (
        <>
            <main className={styles.mainAbout}>
                <div className={styles.about}>
                    <div className={styles.about__wrapper}>
                        <div className={styles.LContent}>
                            {/* <h1>Tentang <span className='secondary'>Kami</span></h1> */}
                            <p className='bodyText '>
                                Mulon adalah Startup Teknologi yang bergerak pada layanan lingkungan dan sosial, kami hadir sebagai bentuk pendekatan baru bagi masyarakat kupang khususnya dalam mengatasi masalah sampah dengan pemanfaatan teknologi.
                            </p>
                            <Link href='/home/about'>
                                <button className='primary_button'>Lihat Lebih Detail</button>
                            </Link>
                        </div>
                        <div className={styles.RContent}>
                            <Image
                                src={'/Mulon.png'}
                                alt='Mulon Logo'
                                className='logoMulon'
                                width={450}
                                height={450}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <section>
                <div className={styles.sectionContanier}>
                    <div className={styles.sectionContanier__image}>
                        <Image
                            src={'/assets/vector/talking.svg'}
                            width={800}
                            height={800}
                            alt='talking with mulon'
                        />
                    </div>

                    <div className={styles.sectionContanier__param}>
                        <h1>Bertanggung Jawab
                            Bersama Jaga Lingkungan
                            Tetap Bersih Dan Sehat Bersama
                            <span className='secondary'>Kami</span>
                        </h1>
                        <p className='bodyText'>
                            Mulon adalah Startup Teknologi yang bergerak pada layanan lingkungan dan sosial, kami hadir sebagai bentuk pendekatan baru bagi masyarakat kupang khususnya dalam mengatasi masalah sampah dengan pemanfaatan teknologi.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.services}>
                    <div className={styles.services__param}>
                        <h1>Layanan <span className="secondary">Kami</span></h1>
                        <p className="bodyText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam expedita ipsam. Quam, nisi dignissimos.</p>
                    </div>
                    <div className={styles.services__image}>
                        <CardServices />
                        <CardServices />
                        <CardServices />
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-center m-5">Cara
                    <span className='secondary'> Pesan</span>
                </h1>
                <div className={styles.sectionContanier}>
                    <div className={styles.sectionContanier__image}>
                        <Image
                            src={'/assets/vector/pesan.svg'}
                            width={800}
                            height={800}
                            alt='talking with mulon'
                        />
                    </div>

                    <div className={styles.sectionContanier__param}>

                        <div className={styles.timelineContainer}>
                            <TimeLines />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <Feedback />
            </section>
        </>
    )
}

export default AboutLayout