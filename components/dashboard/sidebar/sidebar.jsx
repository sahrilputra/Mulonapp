import React, { useContext } from 'react'
import { useRouter } from "next/navigation";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CollapseItem } from './collapse-item';
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from '../../../ui/dashboard-contex';
import { MulonProfiles } from './sidebar-profile';
import styles from './styles.module.scss';

const SidebarWrapper = () => {
    const router = useRouter();
    const { collapsed, setCollapsed } = useSidebarContext();
    return (
        <>
            {/* <div className={styles.sidebarComponetns}> </div>*/}
            <aside className="h-screen z-[202] sticky top-0">

                {collapsed ? (
                    <div className={Sidebar.Overlay()} onClick={setCollapsed} />
                ) : null}
                <div>
                    <MulonProfiles
                        className="flex items-center justify-center p-5"
                    />
                    <SidebarMenu title="Main">
                        <SidebarItem
                            isActive={router.pathname === "/accounts"}
                            title="Home"
                            icon={"icon"}
                            href="#"
                        />
                    </SidebarMenu>
                    <SidebarMenu title="Page">
                        <SidebarItem
                            isActive={router.pathname === "/accounts"}
                            title="Accounts"
                            icon={"icon"}
                            href="#"
                        />

                        <SidebarItem
                            isActive={router.pathname === "/payments"}
                            title="Payments"
                            icon={"icon"}
                            href="#"
                        />
                    </SidebarMenu>
                </div>
            </aside>

        </>
    )
}

export default SidebarWrapper