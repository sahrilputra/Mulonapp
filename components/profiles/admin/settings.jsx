import React from 'react'
import { Input, Button, Image, Avatar, Badge, Select, SelectItem } from '@nextui-org/react';
import { CiEdit } from "react-icons/ci";
import { MailIcon, LockIcon } from '../../dashboard/icons/Icons';
import styles from './styles.module.scss';
import { LiaFacebook, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
const AdminSettings = () => {

    const teams = [
        { lebel: "Technology", value: "technology" },
        { lebel: "Operational", value: "operational" },
        { lebel: "Marketing", value: "marketing" },
        { lebel: "Sustain", value: "sustain" },
        { lebel: "Human Resource", value: "hrd" },
        { lebel: "Developer", value: "developer" },
        { lebel: "Other", value: "other" },
    ]
    const prov = [
        { lebel: "Nusa Tenggara Timur", value: "NTT" }
    ]
    const city = [
        { lebel: "Kupang", value: "KUPANG" },
        { lebel: "Atambua", value: "BELU" },
        { lebel: "Kefa", value: "TTU" },
        { lebel: "Betun", value: "MALAKA" },
    ]

    return (
        <>
            <div className={styles.content}>
                <div className={styles.imageContent}>
                    <Badge
                        size='25'
                        isOneChar
                        content={<CiEdit className=' text-gray-200 p-1' size={25} />}
                        color="primary"
                        placement="top-right"

                    >
                        <Image
                            size={50}
                            isBordered
                            color="primary"
                            radius="lg"
                            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                        />
                    </Badge>
                </div>
                <div className={styles.forms}>
                    <div className={styles.forms__name}>
                        <Input
                            label="First Name"
                            placeholder="First Name"
                            variant="bordered"
                            value=""
                        />

                        <Input
                            wid
                            label="Last Name"
                            placeholder="Last Name"
                            variant="bordered"
                            value=""
                        />
                    </div>
                    <div className={styles.forms__name}>
                        <Input
                            label="Username"
                            placeholder="Username"
                            variant="bordered"
                            value=""
                        />
                        <Select
                            variant='bordered'
                            size="md"
                            label="Teams"
                        >
                            {teams.map((team) => (
                                <SelectItem>
                                    {team.lebel}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <Input
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        label="Phone Number"
                        placeholder="852 xxx xxx"
                        variant="bordered"
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
                        value=""
                    />
                    <Input
                        endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Masukan Password"
                        type="password"
                        variant="bordered"
                        value=""
                    />
                </div>
            </div>

            {/* ALAMAT */}
            <div className={`${styles.forms} justify-center align-middle`}>
                <p>Alamat</p>
                <div className={styles.forms__name}>
                    <Select
                        variant='bordered'
                        size="md"
                        label="Provinsi"
                    >
                        {prov.map((prov) => (
                            <SelectItem>
                                {prov.lebel}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        variant='bordered'
                        size="md"
                        label="Kota/Kab"
                    >
                        {city.map((city) => (
                            <SelectItem>
                                {city.lebel}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className={styles.forms__name}>
                    <Input
                        label="kec"
                        placeholder="Kecematan"
                        variant="bordered"
                        value=""
                    />
                    <Input
                        label="ZIP"
                        placeholder="ZIP/Postal Code"
                        variant="bordered"
                        value=""
                        type='number'
                    />
                </div>

            </div>

            {/* SOCIAL MEDIA */}
            <div className={`${styles.forms} justify-center align-middle`}>
                <p>Social</p>
                <div className={styles.forms__name}>
                    <Input
                        endContent={
                            <LiaInstagram className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Instagram"
                        placeholder="Instagram"
                        variant="bordered"
                        value=""
                    />
                    <Input
                        endContent={
                            <LiaFacebook className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Facebook"
                        placeholder="Facebook"
                        variant="bordered"
                        value=""
                    />
                    <Input
                        endContent={
                            <LiaLinkedinIn className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="LinkedIn"
                        placeholder="LinkedIn"
                        variant="bordered"
                        value=""
                    />
                </div>
            </div>

            <div className={`${styles.forms} justify-center align-middle`}>
                <p>Description</p>
                <input type="text"
                    label="Deskripsi"
                    placeholder="Desc"
                    variant="bordered"
                    value=""
                />

            </div>
            <div className="flex w-full  justify-end gap-5 mt-5">
                <Button color="danger" variant="flat">
                    Close
                </Button>
                <Button color="primary" >
                    Save
                </Button>

            </div>
        </>
    )
}

export default AdminSettings;
