
"use client";

import Image from 'next/image';
import styles from './themetoggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

const ThemeToggle = () => {

    const { theme, toggle } = useContext(ThemeContext);

    return (
        <>
            <div className={styles.container} onClick={toggle} style={theme === 'dark' ? {
                backgroundColor: 'white'
            } : {
                backgroundColor: '#0f172a'
            }}>
                <Image src="/moon.png" alt="toggle" width={14} height={14} />
                <div className={styles.ball} style={theme === 'dark' ? {
                    left: 3, backgroundColor: '#0f172a'
                } : {
                    right: 3, backgroundColor: 'white'
                }}></div>
                <Image src="/sun.png" alt="toggle" width={14} height={14} />
            </div>
        </>
    )
};

export default ThemeToggle;