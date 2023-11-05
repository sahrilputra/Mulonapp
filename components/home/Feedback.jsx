import React from 'react'
import styles from './feedback.module.scss'
import CardQuote from './quotes/cardQuote';
const Feedback = () => {
    return (
        <>
            <div className={styles.feed}>
                <div className={styles.feed__container}>

                    <div className={styles.feed__wrapper}>
                        <CardQuote />
                        <CardQuote />
                    </div>

                    <div className={styles.feed__param}>
                        <h1 className="text-white">Lihat Kata <span className="secondary">Mereka</span> Mengenai <span className="secondary">Kami</span></h1>
                        <p className="bodyText text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia vel quasi autem? Doloribus iure repellat omnis velit dolorum fugit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback