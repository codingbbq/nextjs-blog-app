import { signOut, useSession } from 'next-auth/react';
import styles from './authlinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
    const {status} = useSession();

    return (
        <>
            {
                status === 'unauthenticated' ? (
                    <Link href='/login'>Login</Link>
                ) : (
                    <>
                        <Link href='/write'>Write</Link>
                        <span className={styles.link} onClick={() => signOut}>Logout</span>
                    </>
                )
            }
        </>
    )
};

export default AuthLinks;