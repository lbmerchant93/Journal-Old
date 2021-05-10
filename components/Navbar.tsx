import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <Link href='/'><a>Home</a></Link>
            <Link href='/newJournalEntry'><a>New Journal Entry</a></Link>
            <Link href='/allJournalEntries'><a>All Journal Entries</a></Link>
        </nav>
    )
}

export default NavBar;