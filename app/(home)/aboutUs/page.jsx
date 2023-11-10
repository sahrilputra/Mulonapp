import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import MediaContainer from '../../../components/home/MediaContainer/MediaContainer';

const About = () => {
    return (
        <>

            <div className={`hero h-100 flex flex-col items-center justify-center ${styles.flexCol} ${styles.vh50} ${styles.topBG}`}>
                <Image
                    src={'/Mulon.png'}
                    alt='Mulon Logo'
                    className='logoMulon'
                    width={100}
                    height={100}
                />
                <h1 className='primary text-center'>Tentang <span className='secondary'>Kami</span></h1>
                <p className='bodyText text-center p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum accusamus nihil accusantium porro deserunt! Voluptas, fugiat itaque facilis adipisci inventore enim ad numquam, amet distinctio esse nobis ipsa, nihil officia!</p>
            </div>
            <main className={`mx-20 ${styles.main}`}>


                <div className="break"></div>

                <div className={` ${styles.mission} `}>
                    <div className={` ${styles.mission__param}`}>
                        <h1 className='primary'>Misi <span className='secondary'>Kami</span></h1>
                        <p className='bodyText text-base md:text-lg lg:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio assumenda expedita ipsa minus, vitae architecto similique aperiam culpa, temporibus magni dolor, autem mollitia eos labore! Amet quasi tenetur at fugiat numquam, voluptates tempore inventore illum animi nisi. Cum, dicta minus.</p>
                        <h1 className='primary mt-20'>Misi <span className='secondary'>Kami</span></h1>
                        <p className='bodyText text-base md:text-lg lg:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio assumenda expedita ipsa minus, vitae architecto similique aperiam culpa, temporibus magni dolor, autem mollitia eos labore! Amet quasi tenetur at fugiat numquam, voluptates tempore inventore illum animi nisi. Cum, dicta minus.</p>
                    </div>
                    <div className={` ${styles.mission__image}`}>
                        <Image
                            src={'/assets/tanganHutan.png'}
                            alt='Mulon Logo'
                            className={` ${styles.hutanImage}`}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>

                <div className="break"></div>

                <div className={`${styles.team}`}>
                    <h1 className='primary'>Temui Team <span className='secondary'>Kami</span></h1>
                </div>

                <div className="break"></div>

            </main>
            <section>
                    <div className={styles.socialContainer}>
                        <h1>Temui <span className="secondary">Kami</span></h1>
                        <MediaContainer />
                        <div className={styles.socialBottom}>
                            <Image
                                className={styles.socialImage}
                                src={"/assets/vector/greenWorld.svg"}
                                width={970}
                                height={210}
                                object-fit={"contain"}
                                alt={"clean worlds"}
                            />
                        </div>
                    </div>
                </section>
        </>
    )
}

export default About