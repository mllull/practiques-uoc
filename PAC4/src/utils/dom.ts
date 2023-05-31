import { simpleStore } from "@/store";

export const setTheme = (theme: "light" | "dark") => {
  if (theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.theme = theme;
  simpleStore.theme = theme;
};

export const toggleTheme = () => {
  if (simpleStore.theme == "light") setTheme("dark");
  else setTheme("light");
};

// const listenerDispatcher = (e: Event) => {
//   if (e) {
//     const element = e.currentTarget as HTMLElement;
//     const theme = element.getAttribute("theme") as "light" | "dark";
//     if (theme) setTheme(theme);
//   }
// };

export const setupDarkMode = () => {
  let theme: "light" | "dark" = "light";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    theme = "dark";
  } else {
    theme = "light";
  }

  setTheme(theme);
};
