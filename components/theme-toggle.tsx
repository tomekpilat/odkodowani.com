"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "odkodowani-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.classList.toggle("dark", next === "dark");
      }
      return next;
    });
  };

  if (!mounted) {
    return (
      <div className="h-9 w-16 rounded-full border border-zinc-200 bg-zinc-100/60" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-white px-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
      aria-label="Przełącz motyw jasny/ciemny"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[11px] text-yellow-300 shadow-sm transition-transform dark:bg-zinc-100 dark:text-zinc-900 ${
          isDark ? "translate-x-7" : ""
        }`}
      >
        {isDark ? "☾" : "☀︎"}
      </span>
    </button>
  );
}


