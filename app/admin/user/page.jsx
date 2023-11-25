"use client"

import React, { useState, useMemo } from 'react'

import { UserTable } from '../../../components/dashboard/Table/UserTable'
import { AdminDeleteModals } from '../../../components/modal/admin/DeleteModals';
import {
    Input,
    useDisclosure,
    Button,
    Chip,
    Spinner,
} from "@nextui-org/react";
import { SearchIcon } from '../../../components/dashboard/navbar/SearchIcon'
import { MailIcon, LockIcon, FilterIcon } from '../../../components/dashboard/icons/Icons';
import AdminAddModal from '../../../components/modal/admin/AdminAddModal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import validation from '../../../utils/validation';
import axios from 'axios';

const user = () => {
    const [isChipVisible, setIsChipVisible] = useState(false);
    const handleClose = () => {
        setIsChipVisible(false);
    };
    const formik = useFormik({
        initialValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            team: '',
        },
        validationSchema: validation.AddingNewAdmin,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const response = await axios.post('/api/admin/register', values);
                if (response.ok) {
                    setFeedback("Berhasil Menambahkan Pengguna");

                } else {
                    setFeedback(response.statusText);
                }
            } catch (error) {
                setFeedback(error.message);
            } finally {
                setLoading(false);
            }
        }
    });
    const teams = [
        { lebel: "Technology", value: "technology" },
        { lebel: "Operational", value: "operational" },
        { lebel: "Marketing", value: "marketing" },
        { lebel: "Sustain", value: "sustain" },
        { lebel: "Human Resource", value: "hrd" },
        { lebel: "Developer", value: "developer" },
        { lebel: "Other", value: "other" },
    ]

    const [email, setEmail] = useState('');

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);


    const [newUser, setNewUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        team: '',
    });

    const [feedback, setFeedback] = useState("");

    const [selectedTeam, setSelectedTeam] = useState('');

    const handleTeamChange = (value) => {
        setSelectedTeam(value.target.value);
        handleInputChange('team', value.target.value);
    };

    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (key, value) => {
        setNewUser((prevUser) => ({
            ...prevUser,
            [key]: value,
        }));
        console.log("After : ", value);
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


            <AdminAddModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                loading={loading}
                feedback={feedback}
                teams={teams}
                newUser={newUser}
                formik={formik}
                selectedTeam={selectedTeam}
                handleInputChange={handleInputChange}
                handleTeamChange={handleTeamChange}
            />
        </>
    )
}

export default user

