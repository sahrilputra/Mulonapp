"use client"
import React, { useState } from 'react'
import { CustomerTable } from '../../../components/dashboard/Table/CustomerTable';
import {
    Input,
    useDisclosure,
    ModalContent,
    Modal,
    ModalHeader,
    Link,
    ModalBody,
    ModalFooter,
    Chip,
    Button,
} from "@nextui-org/react";

import axios from 'axios';
import { SearchIcon } from '../../../components/dashboard/navbar/SearchIcon'
import { MailIcon, LockIcon, FilterIcon } from '../../../components/dashboard/icons/Icons';
const CustomerTableView = () => {
    const [isChipVisible, setIsChipVisible] = useState(false);
    const handleClose = () => {
        setIsChipVisible(false);
    };
    const [feedback, setFeedback] = useState({
        message: '',
        type: '', // 'success' atau 'error'
    });

    const [newUser, setNewUser] = useState({
        name: "", email: "", password: "", username: "", phone: ""
    })

    const handleInputChange = (key, value) => {
        setNewUser({
            ...newUser,
            [key]: value,
        });
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.post('/api/customer/register', newUser);
            console.log(response.data);

            setFeedback({
                message: 'Sukses menambahkan data',
                type: 'success',
            });
            setIsChipVisible(true);
        } catch (error) {
            console.log(error);
            setFeedback({
                message: 'Gagal menambahkan data. Cek kembali formulir Anda.',
                type: 'error',
            });
            setIsChipVisible(true);
        }
        onClose();
    };


    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <div className=" h-full">
                <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-2 max-w-[90rem] mx-auto w-full">
                    <div className="mt-6  gap-6 flex flex-col w-full">
                        {isChipVisible && (
                            <Chip className='text-center w-full' color={feedback.type === 'success' ? 'success' : 'danger'} onClose={handleClose}>
                                {feedback.message}
                            </Chip>
                        )}
                        <div className="flex  flex-wrap justify-between">
                            <h3 className="text-center text-xl font-semibold">All Mulon User</h3>
                            <div className="justify-end flex flex-wrap flex-row gap-3">

                                <Input
                                    classNames={{
                                        base: "max-w-full sm:max-w-[10rem] h-10",
                                        mainWrapper: "h-full",
                                        input: "text-small",
                                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                                    }}
                                    placeholder="Cari Pengguna"
                                    size="sm"
                                    startContent={<SearchIcon size={18} />}
                                    type="search"

                                />
                                <Button
                                    isIconOnly
                                    size="sm"
                                >
                                    <FilterIcon />
                                </Button>
                                <Button size='sm' onPress={onOpen} color="primary">Tambah Pengguna</Button>
                            </div>
                        </div>
                        <CustomerTable />
                    </div>
                </div>
            </div>


            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom-center"
                backdrop='blur'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Pengguna Baru</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    isRequired
                                    label="Username"
                                    placeholder="userName"
                                    variant="bordered"
                                    value={newUser.username}
                                    onChange={(e) => handleInputChange('username', e.target.value)}
                                />
                                <Input
                                    isRequired
                                    label="Name"
                                    placeholder="Nama Lengkap"
                                    variant="bordered"
                                    value={newUser.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                                <Input
                                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                                    type="number"
                                    label="Nomor Pengguna"
                                    placeholder="852 xxx xxx"
                                    variant="bordered"
                                    isRequired={true}
                                    value={newUser.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">+62</span>
                                        </div>
                                    }
                                />
                                <Input
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Email"
                                    variant="bordered"
                                    value={newUser.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Masukan Password"
                                    type="password"
                                    variant="bordered"
                                    value={newUser.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSaveClick}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomerTableView;

