import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:scale-110 flex items-center justify-center overflow-hidden group"
            aria-label="Toggle theme"
        >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />

            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground relative z-10 transition-transform group-hover:rotate-12" />
            ) : (
                <Sun className="w-5 h-5 text-foreground relative z-10 transition-transform group-hover:rotate-90" />
            )}
        </button>
    );
}
