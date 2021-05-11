import Link from "next/link";
import * as React from 'react'
import NavBar from "./Navbar"

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Link href='/'><h1>MiWi</h1></Link>
            <NavBar />
            { children }
        </div>
    )
}
export default Layout;