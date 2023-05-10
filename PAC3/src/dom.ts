export const setDOMContent = (
  elementId: string,
  content: string,
  typeContent: "content" | "src" = "content"
) => {
  if (typeContent == "content")
    document.querySelector<HTMLDivElement>(`#${elementId}`)!.innerHTML =
      content;
  if (typeContent == "src")
    document.querySelector<HTMLImageElement>(`#${elementId}`)!.src = content;
};

export const appendDOMContent = (elementId: string, content: string) => {
  document.querySelector<HTMLDivElement>(`#${elementId}`)!.innerHTML += content;
};

const setDarkModeIcon = (theme: "light" | "dark") => {
  let btnLightHtml = `
  <svg
        id="dark__mode__toggle" theme="light"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 cursor-pointer"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68Zm-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44ZM51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17ZM196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72Zm8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12Zm84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Z"
        />
      </svg>
  `;

  let btnDarkHtml = `
  <svg id="dark__mode__toggle" theme="dark" class="h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z"/></svg>
  `;

  if (theme == "dark") {
    setDOMContent("dark__mode", `${btnLightHtml}`);
  } else {
    setDOMContent("dark__mode", `${btnDarkHtml}`);
  }

  document
    .querySelector<HTMLElement>("#dark__mode__toggle")
    ?.addEventListener("click", listenerDispatcher, false);
};

const setTheme = (theme: "light" | "dark") => {
  if (theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.theme = theme;
  setDarkModeIcon(theme);
};

const listenerDispatcher = (e: Event) => {
  if (e) {
    const element = e.currentTarget as HTMLElement;
    const theme = element.getAttribute("theme") as "light" | "dark";
    if (theme) setTheme(theme);
  }
};

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
