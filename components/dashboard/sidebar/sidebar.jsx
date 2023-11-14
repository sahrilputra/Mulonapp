import React, { useContext } from 'react'
import { useRouter } from "next/navigation";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CollapseItem } from './collapse-item';
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from '../../../ui/dashboard-contex';
import { MulonProfiles } from './sidebar-profile';
import { LayoutIcon, UsersIcon } from '../icons/Icons';
import styles from './styles.module.scss';

const SidebarWrapper = () => {
    const router = useRouter();
    const { collapsed, setCollapsed } = useSidebarContext();
    return (
        <>
            {/* <div className={styles.sidebarComponetns}> </div>*/}
            <aside className="h-screen z-[202] sticky top-0 flex justify-center border-r-3">
                {collapsed ? (
                    <div className={Sidebar.Overlay()} onClick={setCollapsed} />
                ) : null}
                <div className="flex gap-3 flex-col  ">
                    <div className="flex p-2 justify-center align-middle mt-2">
                        <MulonProfiles />
                    </div>
                    <SidebarMenu title="Main">
                        <SidebarItem
                            isActive={router.pathname === "/accounts"}
                            title="Home"
                            icon={<LayoutIcon />}
                            href="/admin/dashboard"
                        />
                    </SidebarMenu>
                    <SidebarMenu title="Page">
                        <SidebarItem
                            isActive={router.pathname === "/accounts"}
                            title="User"
                            icon={<UsersIcon />}
                            href="/admin/user"
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