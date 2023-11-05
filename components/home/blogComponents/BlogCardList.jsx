import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from './styles.module.scss'
const BlogCardList = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageSpan}>
                    <Image
                        src={'/assets/blog/blog1.png'}
                        width={818}
                        height={600}
                        className='earthSVG'
                        alt='Green Earth' />
                </div>
                <div className={styles.tittle}>
                    Green Trees Color the City in Mass Planting Action
                </div>
                <div className={styles.param}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a velit euismod.
                </div>
            </div>
        </>
    )
}

export default BlogCardList