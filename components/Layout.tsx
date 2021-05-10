import Link from "next/link";
import NavBar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Link href='/'><h1>MiWi</h1></Link>
            <NavBar />
            { children }
        </div>
    )
}
export default Layout;