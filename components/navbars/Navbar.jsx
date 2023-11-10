"use client"
import React from "react";
import { Navbar, NavbarMenuToggle, NavbarBrand, NavbarMenuItem, NavbarContent, NavbarMenu, NavbarItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './styles.module.scss'
import Image from "next/image";
export default function TestNavbars() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar shouldHideOnScroll={!isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`${styles.nav} bg-gradient-to-tr from-green-200 backdrop-blur-md`}>

            <NavbarBrand>
                <div className={styles.nav__image}>
                    <Link color="foreground" href="/">
                        <Image
                            className={styles.nav__mulon}
                            src={"/Mulon.png"}
                            width={25}
                            height={25}
                            alt="molun Logo"
                        />
                    </Link>
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="/aboutUs" aria-current="page">
                        Tentang
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="light"
                            >
                                Layanan
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new" href="/angkut">Pengangkutan Sampah</DropdownItem>
                            <DropdownItem key="copy" href="/pemberdayaan">Layanan Masyarakat</DropdownItem>
                            <DropdownItem key="edit" href="/teknologi">Pengembangan Teknologi</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/blog">
                        Blog
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
