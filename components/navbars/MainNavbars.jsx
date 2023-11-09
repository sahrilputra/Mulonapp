"use client";
import { React, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { color, motion, useAnimation } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { NextUIProvider } from "@nextui-org/react";

import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';

const MainNavbars = () => {

    const [scrolled, setScrolled] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const controls = useAnimation();
    const isMobileView = useMediaQuery({ maxWidth: 768 });


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && !scrolled) {
                setScrolled(true);
            } else if (currentScrollY <= 5 && scrolled) {
                setScrolled(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, prevScrollY, controls, isMobileView]);


    const navbarAnimation = {
        backgroundColor: scrolled || isMobileView ? '#549b79' : 'transparent',
        boxShadow: scrolled || isMobileView ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        li: {
            color: 'white',
        },
    };
    const navbar = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;
    return (
        <>
                <motion.div
                    animate={{ y: scrolled || isMobileView ? 0 : '50%' }}
                    initial={{ y: 0 }}
                    style={{ ...navbarAnimation }}
                    className={styles.nav}
                >
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