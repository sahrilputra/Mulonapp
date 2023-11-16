import React from 'react'
import styles from './styles.module.scss';
import {
    Card,
    Image,
    Input,
    Button,
    CardHeader, CardBody,
} from '@nextui-org/react';
import { MailIcon, LockIcon } from '../../../../components/dashboard/icons/Icons';

export default function adminLogin() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h4 className=' text-white'>Selamat Datang Kembali <span className='secondary'>Admin</span> </h4>
                    <div className={styles.imageContainer}>
                        <Image
                            src='/Mulon.png'
                            width={100}
                            height={100}
                            aria-description='mulon'
                            alt='Mulon'
                            className="object-contain"
                        ></Image>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h3 className='primary p-3'>Hello <span className='secondary'> Founder</span></h3>
                        <div className={styles.formWrapper}>
                            <Card className=' flex flex-col gap-4 py-4'>
                                <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                    <p className="primary font-bold text-center">Login <span className='secondary' > Admin</span></p>
                                </CardHeader>
                                <CardBody className=' flex flex-col justify-center'>
                                    <Input
                                        size='md'
                                        autoFocus
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Email"
                                        placeholder="Masukan Email"
                                        variant="bordered"
                                        className='p-3'
                                    />
                                    <Input
                                        size='md'
                                        className='p-3'
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Masukan Password"
                                        type="password"
                                        variant="bordered"
                                    />
                                    <Button size="sm" className='p-3' color='primary'>Login</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
