import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropRightLine } from "react-icons/ri";
const CardServices = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__imageSpan}>
                    <Image
                        alt="Card Image"
                        src={"/assets/image/Angkut.png"}
                        width={500}
                        height={500}
                        className={styles.cardsImage}
                        object-fit={"contain"}
                    />
                </div>
                <div className={styles.container__cards}>
                    <h4>Penjemputan
                        Sampah
                    </h4>
                    <Link href="#">
                        <button className={styles.roundedBtn}><RiArrowDropRightLine /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardServices