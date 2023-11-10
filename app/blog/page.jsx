"use client"
import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import BlogCards from '../../components/blog/BlogCards'
const BlogPage = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__wrapper}>
                    <Image
                        className={styles.image}
                        width={430}
                        src={"/assets/vector/talking.svg"}
                        alt='blog image'
                        height={360}
                    />
                    <div className={styles.param}>
                        <h4 className='primary'>Tulisan <span className='secondary'>Kami</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, perspiciatis?</p>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
                <BlogCards />
            </div>

            <div className="break" />
            <div className="break" />
        </>
    )
}

export default BlogPage;
