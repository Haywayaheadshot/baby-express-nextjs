"use client"

import { ReactNode } from "react";
import NavBar from "./navbar";

interface NavWrapperProps {
    children: ReactNode;
}

const NavWrapper = ({children}: NavWrapperProps) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default NavWrapper;