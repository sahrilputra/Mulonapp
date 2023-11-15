import React, { useContext } from 'react'
import { useRouter, usePathname } from "next/navigation";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CollapseItem } from './collapse-item';
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from '../../../ui/dashboard-contex';
import { MulonProfiles } from './sidebar-profile';
import { LayoutIcon, HomeIcon, UsersIcon, SettingsIcon, DevIcon, ChangeLogIcon, CustomersIcon, AccountsIcon, ReportsIcon } from '../icons/Icons';
import styles from './styles.module.scss';

const SidebarWrapper = () => {
    const router = usePathname();
    const { collapsed, setCollapsed } = useSidebarContext();
    console.log(router);

    return (
        <>

            {/* <div className={styles.sidebarComponetns}> </div>*/}
            <aside className={`h-screen z-[202] sticky top-0 flex justify-center border-r-3 ${styles.sidebars}`}>
                <div onClick={() => setCollapsed(false)} />
                <div className={`flex gap-3 flex-col ${styles.wrapper}`}>
                    <div className="flex p-2 justify-center align-middle mt-2 ">
                        <MulonProfiles />
                    </div>
                    <SidebarMenu title="Main">
                        <SidebarItem
                            isActive={router === "/admin/dashboard"}
                            title="Home"
                            icon={<HomeIcon />}
                            href="/admin/dashboard"
                        />
                    </SidebarMenu>
                    <SidebarMenu title="Page">

                        <SidebarItem
                            isActive={router === "/admin/user"}
                            title="User"
                            icon={<CustomersIcon />}
                            href="/admin/user"
                        />

                        <SidebarItem
                            isActive={router === "/payments"}
                            title="Customer"
                            icon={<CustomersIcon />}
                            href="#"
                        />
                        <SidebarItem
                            isActive={router === "/reports"}
                            title="Reports"
                            icon={<ReportsIcon />}
                            href="#"
                        />
                    </SidebarMenu>
                    <SidebarMenu title="General">
                        <SidebarItem
                            isActive={router === "/settings"}
                            title="Settings"
                            icon={<SettingsIcon />}
                            href="#"
                        />

                        <SidebarItem
                            isActive={router === "/developer"}
                            title="Developer"
                            icon={<DevIcon />}
                            href="#"
                        />

                        <SidebarItem
                            isActive={router === "/changeLog"}
                            title="Update Logs"
                            icon={<ChangeLogIcon />}
                            href="#"
                        />


                    </SidebarMenu>
                </div>
            </aside>

        </>
    )
}

export default SidebarWrapper