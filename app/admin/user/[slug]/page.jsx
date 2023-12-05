"use client"
import React, { useCallback, useState, useEffect } from "react"
import {
    Card,
    CardBody,
    Image,
    Button,
    Slider,
    CardHeader,
    Chip,
    Breadcrumbs,
    BreadcrumbItem
} from "@nextui-org/react";
import { GoMail } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { PiUserThin } from "react-icons/pi";
import { LiaFacebook, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";
import AdminContent from "../../../../components/profiles/admin/content";

export default function Page({ params }) {

    console.log(params.slug);

    const [user, setUser] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`/api/admin/${params.slug}`);
            const data = await response.json();

            setUser(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },);

    useEffect(() => {
        fetchData();
    },)
    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <>
            <div className="mx-auto w-full">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-full h-1/3"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <Image
                                    alt="Album cover"
                                    className="object-cover"
                                    height={100}
                                    shadow="md"
                                    src={`${user.avatar}`}
                                    width="100%"
                                />
                            </div>

                            <div className="flex flex-col col-span-6 md:col-span-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h3 className="font-semibold text-foreground/90">{user.username}</h3>
                                        <p className='text-medium text-foreground/80 '>
                                            {user.firstName}    {user.lastName}
                                        </p>
                                        <span className="text-small text-foreground/80 flex align-middle gap-3 my-3 flex-row">
                                            <PiUserThin size={20} className='text-small text-foreground/80 ' />
                                            <p className='text-small text-foreground/80 '>
                                                {user.team}
                                            </p>
                                        </span>

                                        <div className="flex flex-row gap-8">
                                            <p className="text-small text-foreground/80 flex align-middle justify-center gap-3 flex-row">
                                                <PiUserThin size={20} /> +62
                                            </p>
                                            <p className="text-small text-foreground/80 flex align-middle justify-center  gap-3 flex-row">
                                                <GoMail size={20} className='text-small text-foreground/80' />{user.email}
                                            </p>
                                        </div>
                                        <h1 className="text-sm font-normal mt-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, perspiciatis.
                                        </h1>
                                    </div>
                                </div>

                                <div className="flex w-full items-center mt-5 gap-5 justify-center lg:justify-start">
                                    <Button
                                        isIconOnly
                                        className="data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                    >
                                        <LiaInstagram size={30} />
                                    </Button>
                                    <Button
                                        isIconOnly
                                        className="data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                    >
                                        <LiaFacebook size={30} />
                                    </Button>
                                    <Button
                                        isIconOnly
                                        className="w-auto h-auto data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                    >
                                        <LiaLinkedinIn size={30} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="my-3">
                <AdminContent className="w-full" />
            </div>
        </>
    )
}
