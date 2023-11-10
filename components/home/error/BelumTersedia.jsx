import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from 'next/link';
import { Button } from '@nextui-org/button';
const BelumTersedia = () => {
    return (
        <>
            <div className="h-screen  flex flex-col align-middle text-center justify-center">
                <h1 className='primary'>Layanan Ini Belum <span className='secondary'>Tersedia</span></h1>

                <div className="break" />
                <div className="w-1/2 mx-auto">
                    <Link href='/' >
                        <button className='primary_button mx-auto flex flex-row'>Kembali Ke Beranda <RiArrowDropRightLine size={20} fill='#ffff' /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BelumTersedia