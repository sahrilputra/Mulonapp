"use client";
import React from 'react';
import styles from './styles.module.scss';
import { motion, animate } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';

const MainNavbars = () => {
    return (
        <>
            <motion.div className={styles.nav}>
                <div className={styles.nav__image}>
                    <Image
                        className={styles.nav__mulon}
                        src={"/Mulon.png"}
                        width={50}
                        height={50}
                        alt="molun Logo"
                    />
                </div>
                <ul className={styles.nav__container}>
                    <li className={styles.nav__items}>
                        <p>About</p>
                        <ul>
                            <li><Link href="">Teams</Link></li>
                            <li><Link href="">Mulon</Link></li>
                        </ul>
                    </li>
                    <li className={styles.nav__items}><Link href="">Services</Link></li>
                    <li className={styles.nav__items}><Link href="">Blog</Link></li>
                </ul>
            </motion.div>
        </>
    )
}

export default MainNavbars