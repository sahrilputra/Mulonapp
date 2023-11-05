"use client";
import React from 'react'
import { Card } from 'flowbite-react'
import styles from './styles.module.scss'
const CardBenefit = () => {
    return (
        <>
            <div className={styles.cardsContainer}>
                <Card>
                    <div className={styles.icons}>
                        Icon Here
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident.</p>
                </Card>
            </div>
        </>
    )
}

export default CardBenefit