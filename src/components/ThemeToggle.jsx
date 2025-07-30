import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import {cn} from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setisDarkmode] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setisDarkmode(true);
            document.documentElement.classList.add("dark");

        } else {
            document.documentElement.classList.remove("dark");
        }
    })
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setisDarkmode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setisDarkmode(true)
        }
    }
    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300")}> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}</button>
}