import Link from "next/link";
import React from "react";
import NavBar from "./Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Link href='/'><h1>MiWi</h1></Link>
            <NavBar />
            { children }
        </div>
    )
}
export default Layout;