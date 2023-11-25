"use client"
import React, { useContext, useState, useEffect } from 'react'
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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (isDesktopLarge) {
            setSidebarOpen(false);
        } else if (isTabletMed) {
            setSidebarOpen(true);
        }
    }, [isDesktopLarge, isTabletMed]);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleChildrenClick = () => {
        if (!isTabletMed && !sidebarOpen) {
            setSidebarOpen(true);
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
