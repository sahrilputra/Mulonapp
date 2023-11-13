"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import styles from './styles.module.scss'

export default function NavbarWrapper({ children }) {
    return (
        <>
            <div className={styles.navbarWrapper}>
                <Navbar isBordered className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <NavbarContent as="div" className="items-center" justify="end">
                        <NavbarContent justify="end">
                            <NavbarContent className="hidden sm:flex gap-3">
                                <NavbarItem>
                                    <Link color="foreground" href="#">
                                        Features
                                    </Link>
                                </NavbarItem>
                                <NavbarItem isActive>
                                    <Link href="#" aria-current="page" color="secondary">
                                        Customers
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link color="foreground" href="#">
                                        Integrations
                                    </Link>
                                </NavbarItem>
                            </NavbarContent>
                        </NavbarContent>

                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">zoey@example.com</p>
                                </DropdownItem>
                                <DropdownItem key="settings">My Settings</DropdownItem>
                                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                <DropdownItem key="analytics">Analytics</DropdownItem>
                                <DropdownItem key="system">System</DropdownItem>
                                <DropdownItem key="configurations">Configurations</DropdownItem>
                                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                </Navbar>
                {children}
            </div>
        </>
    )
}
