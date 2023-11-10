"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
const BlogCards = () => {
    return (
        <>

            <div className="wrapper w-80 flex align-middle justify-center">

                <Card
                    isFooterBlurred
                    className="py-4">
                    <CardBody className="overflow-visible py-2 relative">
                        <Image
                            alt="Woman listing to music"
                            className="object-cover"
                            src="/assets/blog/blog1.png"
                            width={300}
                        />
                        <CardFooter className=" justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(92%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-gray-500">12 Hours Ago.</p>
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                Visit
                            </Button>
                        </CardFooter>
                    </CardBody>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Rian</p>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                        <small className="text-default-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero quam doloribus inventore eos!</small>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}

export default BlogCards