import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropRightLine } from "react-icons/ri";
const CardServices = ({image, title}) => {
    return (
        <>

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Image
                        className={styles.cardsImage}
                        alt="Card Image"
                        src={`/assets/image/${image}.png`}
                        width={500}
                        height={500}
                    />
                    <div className={styles.container__cards}>
                        <h4>
                            {title}
                        </h4>
                        <Link href="#">
                            <button className={styles.roundedBtn}><RiArrowDropRightLine size={25} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardServices