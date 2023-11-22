"use client"
import React, { useContext, useState, useCallback, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    Chip,
    Button,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import { LayoutIcon } from "../icons/Icons";
import styles from './styles.module.scss'
import { useSidebarContext } from "../../../ui/dashboard-contex";
import { useMediaQuery } from "react-responsive";
import { VersionLebel } from "../../navbars/lebels/VersionLebel";
export default function NavbarWrapper({ children }) {
    const { collapsed, setCollapsed } = useSidebarContext();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const isDesktopLarge = useMediaQuery({
        query: '(min-width : 1024px)'
    });
    const isTabletMed = useMediaQuery({
        query: '(min-width: 900px)'
    }); 

    const isMobiledView = useMediaQuery({
        query: '(min-width: 600px)'
    });

    const isSmallerMobile = useMediaQuery({
        query: '(min-width: 300px)'
    })

    return (
        <>
            <div className={styles.navbarWrapper}>
                <Navbar isBordered className="">
                    {isDesktopLarge ? (
                        <></>
                    ) : (
                        <Button
                            variant="ghost"
                            isIconOnly
                            onMenuOpenChange={() => setIsMenuOpen}
                            className="clicked"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <LayoutIcon />
                        </Button>
                        
                    )}
                    {/* {isTabletMed ? (
                        <></>
                    ) : (
                        <Button
                            variant="ghost"
                            isIconOnly
                            onMenuOpenChange={() => setIsMenuOpen}
                            className="clicked"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <LayoutIcon />
                        </Button>
                    )} */}
                    <NavbarContent as="div" className="">
                        <NavbarContent justify="end" className=' flex gap-3'>
                            <NavbarContent className="hidden sm:flex gap-3">
                                <NavbarItem>
                                    <Link color="foreground" href="#">
                                        Docs
                                    </Link>
                                </NavbarItem>
                                <NavbarItem isActive>
                                    <Link href="#" aria-current="page" color="secondary">
                                        Blog
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <VersionLebel />
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
