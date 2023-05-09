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

export const appDOMContent = (elementId: string, content: string) => {
  document.querySelector<HTMLDivElement>(`#${elementId}`)!.innerHTML += content;
};
