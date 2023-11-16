"use client"
import React, { useState } from "react";

import PieWasteType from "../../../components/chart/waste-type";
import { ExampleChart } from '../../../components/chart/bar-chart'
import { TotalGarbageData } from "../../../components/chart/total-garbage";
import { Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import styles from './styles.module.scss';

const sordetPlace = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [userData, setUserData] = useState(null);

    const [formData, setFormData] = useState({
        userNumber: "",
        servicePrice: "",
        garbageWeight: "",
    });


    const data = [
        { id: 1, name: "Rian", phone: 121 },
        { id: 2, name: "John", phone: 122 },
        { id: 3, name: "Chika", phone: 123 },
        { id: 4, name: "Stepanus", phone: 124 },
        { id: 5, name: "Vivin", phone: 125 },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Find user data based on the entered user number
        const user = data.find((user) => user.phone === parseInt(formData.userNumber));
        setUserData(user);
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
                    <h3 className="text-center text-xl font-semibold">add New Data For User</h3>

                    <div className={styles.form}>
                        <div className="flex flex-col flex-wrap justify-center gap-4">
                            <Input
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                                type="number"
                                label="Nomor Pengguna"
                                placeholder="852 xxx xxx"
                                name="userNumber"
                                labelPlacement="outside"
                                onChange={handleInputChange}
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
                                    placeholder="0"
                                    labelPlacement="outside"
                                    onChange={handleInputChange}
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">Rp</span>
                                        </div>
                                    }
                                    type="number"
                                />
                                <Input
                                    className="flex flex-1"
                                    onChange={handleInputChange}
                                    type="number"
                                    label="Berat Sampah"
                                    placeholder="0.00"
                                    labelPlacement="outside"
                                    endContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">Kg</span>
                                        </div>
                                    }
                                />
                            </div>
                            <Button className="flex"
                                onPress={handleSubmit}
                                color="primary" variant="solid"
                            >
                                Sumbit
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Tambahkan Data Untuk Pengguna</ModalHeader>
                            <ModalBody>
                                {userData ? (
                                    <>
                                        <p>nama: {userData.name}</p>
                                        <p>total Berat: {formData.garbageWeight} Kg</p>
                                        <p>harga: Rp. {formData.servicePrice}</p>
                                    </>
                                ) : (
                                    <p>User data not found</p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>




    )
}

export default sordetPlace;