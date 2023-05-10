import { viewPropsType } from "./pages/view";

const getFullPathname = () => location.pathname + location.search;

const openFile = async (
  fileName: "list" | "view",
  pid: number | null,
  setupRoute: boolean = true
) => {
  const file = await import(`./pages/${fileName}.ts`);

  if (fileName == "view") {
    if (setupRoute) {
      history.pushState({}, "", `/pokemon?id=${pid}`);
    }
    file.__render(<viewPropsType>{ pid });
  } else {
    if (setupRoute) {
      history.pushState({}, "", `/`);
    }
    file.__render();
  }

  routerSetupHandlers();
};

const catchClick = (element: HTMLButtonElement) => {
  let pid = null;
  const page: "view" | "list" = element.getAttribute("to")! as "view" | "list";

  if (page == "view") pid = parseInt(element.getAttribute("pid")!);

  openFile(page, pid);
};

const listenerDispatcher = (e: Event) => {
  if (e) catchClick(e.currentTarget as HTMLButtonElement);
};

export const routerSetupHandlers = () => {
  document
    .querySelectorAll<HTMLButtonElement>("button[route-link]")
    .forEach((element) => {
      element.addEventListener("click", listenerDispatcher);
    });
};

const __main = () => {
  routerSetupHandlers();
  if (getFullPathname().includes("pokemon")) {
    const pid = parseInt(getFullPathname().split("id=")[1]!);
    if (!isNaN(pid)) openFile("view", pid, false);
  } else {
    document.querySelector<HTMLButtonElement>("button[route-link]")?.click();
  }
};

__main();
