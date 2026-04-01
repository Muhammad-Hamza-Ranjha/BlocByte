'use client';

import { Moon, Sun } from './Icons';

const THEME_KEY = 'blocbytes-theme';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <Sun className="theme-icon theme-icon-sun h-4 w-4" />
      <Moon className="theme-icon theme-icon-moon h-4 w-4" />
    </button>
  );
}
