"use client"
import React from 'react'
import { RiWhatsappFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import styles from './styles.module.scss'
import Link from 'next/link';
const MediaContainer = () => {
    return (
        <div className={styles.mediaContainer}>
            <Link href={"#"}>
                <RiWhatsappFill size={40} fill='#656D78' />
            </Link>
            <Link href={"#"}>
                <RiFacebookFill size={40} fill='#656D78' />
            </Link>
            <Link href={"#"}>
                <RiInstagramFill size={40} fill='#656D78' />
            </Link>
        </div>
    )
}

export default MediaContainer