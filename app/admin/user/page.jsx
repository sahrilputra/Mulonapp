"use client"

import React, { useState, useMemo } from 'react'

import { UserTable } from '../../../components/dashboard/Table/UserTable'

import {
    Input,
    useDisclosure,
    ModalContent,
    Modal,
    ModalHeader,
    Link,
    ModalBody,
    ModalFooter,
    Button,
    Select,
    SelectItem,
    Chip,
} from "@nextui-org/react";
import { SearchIcon } from '../../../components/dashboard/navbar/SearchIcon'
import { MailIcon, LockIcon, FilterIcon } from '../../../components/dashboard/icons/Icons';

import axios from 'axios';

const user = () => {
    const [isChipVisible, setIsChipVisible] = useState(false);
    const handleClose = () => {
        setIsChipVisible(false);
    };

    const teams = [
        { lebel: "Technology", value: "technology" },
        { lebel: "Operational", value: "operational" },
        { lebel: "Marketing", value: "marketing" },
        { lebel: "Sustain", value: "sustain" },
        { lebel: "Human Resource", value: "hrd" },
        { lebel: "Developer", value: "developer" },
        { lebel: "Other", value: "other" },
    ]

    // controler email
    const [email, setEmail] = useState('');

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);


    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        team: '',
    });

    const [feedback, setFeedback] = useState({
        message: '',
        type: '', // 'success' atau 'error'
    });

    const handleInputChange = (key, value) => {
        setNewUser({
            ...newUser,
            [key]: value,
        });
    };


    const handleSaveClick = async () => {
        try {
            const response = await axios.post('/api/admin/register', newUser);
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
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <div className=" h-full">

                <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-2 max-w-[90rem] mx-auto w-full">
                    <div className="mt-6  gap-6 flex flex-col w-full">
                        <div className="flex  flex-wrap justify-between">
                            <h3 className="text-center text-xl font-semibold">Mulon Teams</h3>
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
                        {isChipVisible && (
                            <Chip className='text-center w-full' color={feedback.type === 'success' ? 'success' : 'danger'} onClose={handleClose}>
                                {feedback.message}
                            </Chip>
                        )}
                        <UserTable />
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
                            <ModalHeader className="flex flex-col gap-1">Tambah Admin Baru</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    isRequired
                                    label="Name"
                                    placeholder="Masukan Nama Lengkap"
                                    variant="bordered"
                                    value={newUser.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                                <Select
                                    size="sm"
                                    label="Pilih Team"
                                    value={newUser.team}
                                    onchange={(value) => handleInputChange('team', value)}
                                >
                                    {teams.map((team) => (
                                        <SelectItem key={team.value} value={team.value}>
                                            {team.lebel}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    isRequired
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    type='email'
                                    placeholder="Masukan Email"
                                    // isInvalid={isInvalid}
                                    // color={isInvalid ? "danger" : "success"}
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

export default user

