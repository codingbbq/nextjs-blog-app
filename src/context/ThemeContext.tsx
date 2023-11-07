'use client';

import { createContext, useState, useEffect } from "react";
import { ITheme, Props } from "../../types";

export const ThemeContext = createContext<ITheme | null>(null);

const getFromLocalStorage = () => {
    if(typeof window !== undefined) {
        const value = localStorage.getItem('theme');
        return value || "light";
    }
    return "light";
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