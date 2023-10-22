"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useState, useEffect, useContext } from "react";

const ThemeProvider = ({children}: Props) => {

    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(mounted) {
        return (
            <div className={theme}>{children}</div>
        )
    }
};

export default ThemeProvider;
