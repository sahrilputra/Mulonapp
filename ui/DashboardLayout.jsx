"use client"
import React, { useContext, useState } from 'react'
import { sidebarContextnew } from './dashboard-contex';
import SidebarWrapper from '../components/dashboard/sidebar/sidebar';
import NavbarWrapper from '../components/dashboard/navbar/dashboardNavbar';
import { useDisclosure, } from '@nextui-org/react';
import { LayoutIcon } from '../components/dashboard/icons/Icons';
import styles from './styles.module.scss'
import { useMediaQuery } from 'react-responsive';

export default function DashboardLayout({ children }) {

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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        console.log("Toggling Sidebar");
        setSidebarOpen(!sidebarOpen);
    };

    const handleChildrenClick = () => {
        console.log("children clicked")
        if (!isTabletMed && !sidebarOpen) {
            console.log("Closing Sidebar")
            setSidebarOpen(true);
        } else if (isTabletMed) {
            setSidebarOpen(false);
        }
    };

    return (
        <>
            <sidebarContextnew.Provider value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}>
                <div className={styles.container}>
                    <div
                        className={`
                            ${sidebarOpen ? (styles.hidden) : (styles.open)} 
                            ${isTabletMed ? (styles.sidebar) : (styles.absolute)}
                    `}>
                        <SidebarWrapper />
                    </div>
                    <div className={styles.main} onClick={handleChildrenClick}>
                        <NavbarWrapper />
                        {children}
                    </div>
                </div>
            </sidebarContextnew.Provider>
        </>
    )
}
