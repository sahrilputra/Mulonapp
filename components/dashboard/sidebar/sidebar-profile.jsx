"use client";
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { useMediaQuery } from 'react-responsive';

const mulonImage = '../../Mulon.png';

export const MulonProfiles = () => {

    return (
        <div className="mb-4 mt-2 ">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: false,
                            src: "/Mulon.png",
                        }}
                        className="transition-transform"
                        description="Waste Management"
                        name="Mulon"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="shadow">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Go to Landing Page</p>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
