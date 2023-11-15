import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from './styles.module.scss'
import BlogCardList from './BlogCardList'
const BlogSection = () => {
    return (
        <>
            <div className={styles.blog}>
                <h1>Tulisan <span className='secondary'>Kami</span></h1>
                <div className={styles.blog__wrapper}>
                    <BlogCardList />
                    <BlogCardList />
                    <BlogCardList />
                </div>
                <Link href="https://wa.link/tdbsvz">
                    <button className='primary_button'>Semua Blog Kami</button>
                </Link>
            </div>
        </>
    )
}

export default BlogSection