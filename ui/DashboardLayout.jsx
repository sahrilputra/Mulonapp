"use client"
import React, { useContext, useState } from 'react'
import { sidebarContextnew } from './dashboard-contex';
import SidebarWrapper from '../components/dashboard/sidebar/sidebar';
import NavbarWrapper from '../components/dashboard/navbar/dashboardNavbar';
import { useDisclosure, } from '@nextui-org/react';
import { LayoutIcon } from '../components/dashboard/icons/Icons';
import styles from './styles.module.scss'

export default function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    console.log(sidebarOpen + " new");
    return (
        <>
            <sidebarContextnew.Provider value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}>

                <div className={styles.container}>
                    <div className={` ${sidebarOpen ? (styles.hidden) : (styles.open)}`}>
                        <SidebarWrapper />
                    </div>
                    <div className={styles.main}>
                        <NavbarWrapper />
                        {children}
                    </div>
                </div>
            </sidebarContextnew.Provider>
        </>
    )
}
