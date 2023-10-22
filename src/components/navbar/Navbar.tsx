import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
    return (
        <>
            <nav className={styles.container}>
                <div className={styles.socials}>
                    <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
                    <Image src='/instagram.png' alt='Facebook' width={24} height={24} />
                    <Image src='/tiktok.png' alt='Facebook' width={24} height={24} />
                    <Image src='/youtube.png' alt='Facebook' width={24} height={24} />
                </div>
                <div className={styles.logo}>
                    codingBBQ
                </div>
                <div className={styles.links}>
                    <ThemeToggle />
                    <Link href='/'>Home</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <AuthLinks />
                </div>
            </nav>
        </>
    )
}

export default Navbar;