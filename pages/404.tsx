import Link from "next/link";
import * as React from 'react'

const NotFound: React.FC = () => {
    return (
        <div className='not-found'>
            <h2>Sorry....</h2>
            <h3>This page was not found.</h3>
            <p>Try going back <Link href='/'><a>Home</a></Link></p>
        </div>
    )
}
export default NotFound;