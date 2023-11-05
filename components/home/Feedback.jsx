import React from 'react'
import styles from './feedback.module.scss'
import cardQuote from './quotes/cardQuote';
const Feedback = () => {
    return (
        <>
            <div className={styles.feed}>
                <div className={styles.feed__container}>

                    <div className={styles.feed__wrapper}>
                        <cardQuote />
                        <cardQuote />
                    </div>

                    <div className={styles.feed__param}>
                        <h1>Lihat Kata <span className="secondary">Mereka</span> Mengenai <span className="secondary">Kami</span></h1>
                        <p className="bodyText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia vel quasi autem? Doloribus iure repellat omnis velit dolorum fugit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback