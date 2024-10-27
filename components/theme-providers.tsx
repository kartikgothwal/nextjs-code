"use client";
import React, {Context, createContext, useContext} from "react";
type themeType = {
    primary: string;
    secondary: string
};
const defaultTheme: themeType = {
    primary: "blue",
    secondary: "red"
}
const ThemeContext:Context<themeType> = createContext<themeType>(defaultTheme);

export default function ThemeProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>):Element {
    return (
        <html lang="en">
            <ThemeContext.Provider value={defaultTheme}>
                {children}
            </ThemeContext.Provider>
        </html>
    );
}
export const useTheme:()=>themeType =():themeType=>useContext(ThemeContext)