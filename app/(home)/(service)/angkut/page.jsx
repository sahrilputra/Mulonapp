"use client"
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Ri4KLine } from 'react-icons/ri';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import TimeLines from '../../../../components/home/timeline/TimeLines';
const Layanan = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.wrapper}>

                    <div className={styles.tittle}>
                        <h1 className='primary'>Jasa Pengangkutan <span className='secondary'>Sampah</span></h1>
                        <p className='bodyText'>Kami berkomitmen untuk menjaga lingkungan tetap bersih dan hijau, Dengan layanan pengangkutan sampah kami, Anda dapat dengan mudah dan efisien dalam mengatasi masalah sampah di rumah tangga Anda.</p>
                    </div>
                    <div className={styles.imageHolder}>
                        <Image
                            src={"/assets/image/driver.svg"}
                            width={426}
                            height={362}
                            alt='rider with mulons'
                        />
                    </div>
                </div>
            </div>
            <div className='divider' />
            <div className='divider' />
            <div className='divider' />
            <div className={styles.main}>
                <h1 className='primary'>Metode <span className='secondary'>Layanan</span></h1>

                <div className={styles.cards}>
                    <div className={styles.iconHolder}>
                        <Image
                            width={82}
                            height={82}
                            src={'/assets/icons/onetime.svg'}
                            alt='one time pickup'
                        />
                    </div>
                    <div className={styles.param}>
                        <h3 className={`${styles.title} text-white w-full`}>One Time Pickup</h3>
                        <p className='text-white '>pengangkutan sampah sesekali. Ketika Anda memiliki tumpukan sampah yang perlu dibuang, hubungi kami, dan tim kami akan segera datang untuk menjemputnya. Ini adalah solusi yang ideal untuk kebutuhan sporadis.</p>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.iconHolder}>
                        <Image
                            width={82}
                            height={82}
                            src={'/assets/icons/daily.svg'}
                            alt='one time pickup'
                        />
                    </div>
                    <div className={styles.param}>
                        <h3 className={`${styles.title} text-white w-full`}>Daily Subscription</h3>
                        <p className='text-white'>Dengan langganan ini, Anda dapat menjaga rumah Anda tetap bersih dan bebas dari tumpukan sampah yang mengganggu. Jadwalkan waktu pengambilan yang sesuai dengan kebutuhan Anda, pagi dan sore.</p>
                    </div>
                </div>
            </div>


            <div className={styles.main}>

            </div>
            <div className="break" />

            <div className={styles.main}>
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
            </div>
            <div className="break" />

            <div className={styles.main}>
                <h1>Yang Sering <span className='secondary'>Ditanyakan</span> </h1>

                <div className={styles.wrapperAccordian}>
                    <Accordion
                        className={styles.accordian}
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <AccordionItem className={styles.AccordionItem} key="1" aria-label="Accordion 1" title="Accordion 1">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>




        </>
    )
}

export default Layanan