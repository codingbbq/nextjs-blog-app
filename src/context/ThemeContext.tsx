'use client';

import { createContext, useState, ReactNode, useEffect } from "react";

export const ThemeContext = createContext<ITheme | null>(null);

const getFromLocalStorage = () => {
    if(typeof window !== undefined) {
        const value = localStorage.getItem('theme');
        return value || "light";
    }
}

export const ThemeContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}