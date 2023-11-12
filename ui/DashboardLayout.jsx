"use client"
import React, { useContext } from 'react'
import { sidebarContextnew } from './dashboard-contex';
import SidebarWrapper from '../components/dashboard/sidebar/sidebar';
import NavbarWrapper from '../components/dashboard/navbar/dashboardNavbar';
import styles from './styles.module.scss'


export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <sidebarContextnew.Provider value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
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
