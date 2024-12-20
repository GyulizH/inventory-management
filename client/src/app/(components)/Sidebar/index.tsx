"use client"
import React from 'react';
import {
    Archive,
    CircleDollarSign,
    Clipboard,
    Layout,
    LucideIcon,
    Menu,
    SlidersHorizontal,
    User,
} from "lucide-react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/app/redux";
import {setIsSidebarCollapsed} from "@/state";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface SidebarLinkProps{
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean
}

const SidebarLink = ({
                         href,
                         icon: Icon,
                         label,
                         isCollapsed,
                     }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive =
        pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center ${
                    isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
                    isActive ? "bg-blue-200 text-white" : ""
                }
      }`}
            >
                <Icon className="w-6 h-6 !text-gray-700" />

                <span
                    className={`${
                        isCollapsed ? "hidden" : "block"
                    } font-medium text-gray-700`}
                >
          {label}
        </span>
            </div>
        </Link>
    );
};
const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    }

    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 h-full shadow-md z-40`;

    return (<div className={sidebarClassNames}>
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
            <div>logo</div>
            <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>GYULIZ</h1>

        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
            <Menu className="w-4 h-4"></Menu>
        </button>
        </div>
        <div className="flex-grow mt-8">
            <SidebarLink href={"/dashboard"} icon={Layout} isCollapsed={isSidebarCollapsed} label="Dashboard" />
            <SidebarLink href={"/inventory"} icon={Archive} isCollapsed={isSidebarCollapsed} label="Inventory" />
            <SidebarLink href={"/products"} icon={Clipboard} isCollapsed={isSidebarCollapsed} label="Products" />
            <SidebarLink href={"/users"} icon={User} isCollapsed={isSidebarCollapsed} label="Users" />
            <SidebarLink href={"/settings"} icon={SlidersHorizontal} isCollapsed={isSidebarCollapsed} label="Settings" />
            <SidebarLink href={"/expenses"} icon={CircleDollarSign} isCollapsed={isSidebarCollapsed} label="Expenses" />
        </div>
        <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className="text-center text-xs text-gray-500">&copy; 2024 Gyuliz</p>
        </div>
    </div>)
}

export default Sidebar;