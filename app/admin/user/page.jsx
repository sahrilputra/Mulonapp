"use client"
import React from 'react'
import { UserTable } from '../../../components/dashboard/Table/UserTable'
import { Input, useDisclosure, ModalContent, Modal, ModalHeader, Link, ModalBody, ModalFooter, Button, } from "@nextui-org/react";
import { SearchIcon } from '../../../components/dashboard/navbar/SearchIcon'
import { MailIcon, LockIcon, FilterIcon } from '../../../components/dashboard/icons/Icons';
const user = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
                            <ModalHeader className="flex flex-col gap-1">Pengguna Baru</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Masukan Email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Masukan Password"
                                    type="password"
                                    variant="bordered"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
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

