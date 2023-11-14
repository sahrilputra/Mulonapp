"use client";
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";

const mulonImage = '../../Mulon.png';

export const MulonProfiles = () => {
    return (
        <div className="mb-4 mt-2 ">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: { mulonImage },
                        }}
                        className="transition-transform"
                        description="Smart Waste Management"
                        name="Mulon"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Go to Landing Page</p>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}


{/* <Button
className='p-2'
href='#'
color='default'

>
<User
    className=' font-medium m-0 text-default-900 mb-4 whitespace-nowrap '
    name="Mulon"
    description="Smart Waste Management"
    avatarProps={{
        src: { mulonImage }
    }}
/>
</Button> */}