"use client"
import React from "react";
import { Navbar, NavbarMenuToggle, NavbarBrand, NavbarMenuItem, NavbarContent, NavbarMenu, NavbarItem, Link, Button } from "@nextui-org/react";
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
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Tentang
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Team
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Layanan
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
