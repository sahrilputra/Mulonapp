import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import styles from './styles.module.scss'
import Image from "next/image";
export default function TestNavbars() {
    return (
        <Navbar shouldHideOnScroll className={styles.nav} >
            <NavbarBrand>
                <div className={styles.nav__image}>
                    <Image
                        className={styles.nav__mulon}
                        src={"/Mulon.png"}
                        width={25}
                        height={25}
                        alt="molun Logo"
                    />
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
