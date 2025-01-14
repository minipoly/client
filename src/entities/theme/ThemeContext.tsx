import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "./theme";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const switchTheme = (theme: Theme) => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");

        if (localTheme) {
            switchTheme(localTheme as Theme);
        } else {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;

            if (systemTheme) {
                switchTheme(Theme.DARK);
            }
        }
    }, []);

    const toggleTheme = (theme: Theme) => {
        switchTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
