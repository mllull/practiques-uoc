import { viewPropsType } from "./pages/view";
const catchClick = async (element: HTMLButtonElement) => {
  const page = element.getAttribute("to")!;
  const file = await import(`./pages/${page}.ts`);

  if (page == "view") {
    const pid = parseInt(element.getAttribute("pid")!);
    file.__render(<viewPropsType>{ pid });
    routerSetupHandlers();
  } else {
    file.__render();
    routerSetupHandlers();
  }
};

const listenerDispatcher = (e: Event) => {
  if (e) catchClick(e.target as HTMLButtonElement);
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
  document.querySelector<HTMLButtonElement>("button[route-link]")?.click();
};

__main();
