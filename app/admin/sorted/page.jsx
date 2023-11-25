"use client"
import React, { useState } from "react";

import PieWasteType from "../../../components/chart/waste-type";
import { ExampleChart } from '../../../components/chart/bar-chart'
import { TotalGarbageData } from "../../../components/chart/total-garbage";
import {
    Input,
    useDisclosure,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Chip,
    Card,

} from "@nextui-org/react";
import styles from './styles.module.scss';
import { Alert } from "flowbite-react";
import axios from 'axios';

const sordetPlace = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [feedback, setFeedback] = useState({
        message: '',
        type: '', // 'success' atau 'error'
    });

    const [isChipVisible, setIsChipVisible] = useState(false);

    const handleClose = () => {
        setIsChipVisible(false);
    };

    const [newUser, setNewUser] = useState({
        phone: "", price: "", weight: "",
    });
    const [userData, setUserData] = useState(null);

    const handleInputChange = (key, value) => {
        setNewUser({
            ...newUser,
            [key]: value,
        });
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.post('/api/services/wasteCollector', newUser);
            console.log(response.data);

            setFeedback({
                message: 'Sukses menambahkan data',
                type: 'success',
            });
            setIsChipVisible(true);
            setUserData(response.data.data);

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
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubmit = () => {
        // Find user data based on the entered user number
        onOpen(); // Open the modal
    };



    return (
        <div className=" h-full">
            <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-2 max-w-[90rem] mx-auto w-full">

                <div className="mt-6 gap-6 flex flex-col w-full text-center md:text-left sm:text-center">

                    {/* TOP SECTION */}
                    {/* <div className="flex flex-col gap-2 text-center md:text-left sm:text-center">
                        <h3 className="text-xl font-semibold">Stast Layanan</h3>
                        <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5 justify-center w-full">
                            <CardStats />
                            <TotalGarbageData className="flex justify-center" />
                            <ExampleChart />
                            <ExampleChart />
                        </div>
                    </div> */}
                    <h3 className="text-center text-xl font-semibold ">Waste Collector Data For User</h3>
                    {isChipVisible && (
                        <Alert as={"div"}
                            className={``}
                            radius="md"
                            color={`${feedback.type === 'success' ? 'success' : 'danger'}`}
                            onClose={handleClose}>
                            {feedback.message}
                        </Alert>
                    )}
                    <div className={styles.form}>
                        <div className="flex flex-col flex-wrap justify-center gap-4">
                            <Input
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                                type="number"
                                label="Nomor Pengguna"
                                placeholder="852 xxx xxx"
                                name="userNumber"
                                labelPlacement="outside"
                                value={newUser.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                isRequired={true}
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">+62</span>
                                    </div>
                                }
                            />
                            <div className="flex flex-row flex-wrap justify-between gap-4">
                                <Input
                                    className="flex flex-1"
                                    label="Harga Layanan"
                                    type="number"
                                    placeholder="0"
                                    labelPlacement="outside"
                                    value={newUser.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">Rp</span>
                                        </div>
                                    }
                                />
                                <Input
                                    className="flex flex-1"
                                    type="number"
                                    label="Berat Sampah"
                                    placeholder="0.00"
                                    labelPlacement="outside"
                                    value={newUser.weight}
                                    onChange={(e) => handleInputChange('weight', e.target.value)}
                                    endContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">Kg</span>
                                        </div>
                                    }
                                />
                            </div>
                            <Button className="flex"
                                onPress={handleSaveClick}
                                color="primary" variant="solid"
                            >
                                Sumbit
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onPress={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Nota</ModalHeader>
                            <ModalBody>
                                {userData ? (
                                    <>
                                        <p>nama: {userData.name}</p>
                                        <p>total Berat: {userData.weight} Kg</p>
                                        <p>harga: Rp. {userData.price}</p>
                                    </>
                                ) : (
                                    <p>User data not found</p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal> */}
        </div>




    )
}

export default sordetPlace;