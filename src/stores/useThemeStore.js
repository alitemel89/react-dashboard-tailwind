import { create } from 'zustand'
import { persist } from "zustand/middleware";

const THEME_TYPES = {
    THEME_DARK: "dark",
    THEME_LIGHT: "light",
};

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

export const applyThemePreference = (theme) => {
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};



const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;