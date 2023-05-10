import { getRandomNumber } from "../utils";
import { fetchPokemon } from "../myFetch";
import { appendDOMContent, setDOMContent } from "../dom";
import { routerSetupHandlers } from "../router";

const NUM_FETCH_POKEMONS = 10;

let pokemons: any[] = [];

const drawPokemons = (pokemons: any[]) => {
  setDOMContent("nav__btns", "");

  for (let index = 0; index < pokemons.length; index++) {
    const poke = pokemons[index];
    const pokeBtn = `<button route-link to="view" pid="${poke.id}">${poke.name}</button>`;
    appendDOMContent("nav__btns", pokeBtn);
  }

  routerSetupHandlers();
};

const fetchPokemons = async () => {
  pokemons = [];
  for (let index = 0; index < NUM_FETCH_POKEMONS; index++) {
    let random = getRandomNumber();
    const poke = await fetchPokemon(random);
    pokemons.push(poke);
  }

  drawPokemons(pokemons);
};

const doFilter = (searchInput: HTMLInputElement) => {
  if (searchInput.value.length) {
    drawPokemons(pokemons.filter((p) => p.name.includes(searchInput.value)));
  } else drawPokemons(pokemons);
};

const listenerDispatcher = (e: Event) => {
  if (e) doFilter(e.currentTarget as HTMLInputElement);
};

export const __render = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1 class="mb-30">Tria un pokemon de la llista inferior</h1>
  <div class="relative mb-6">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      class="w-5 h-5 text-gray-500 dark:text-gray-400"
    >
      <path
        fill="currentColor"
        d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"
      />
    </svg>
    </div>
    <input type="text" id="search-text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introdueix el nom d'un Pokemon d'abaix per poder filtrar.">
  </div>
  <nav id="nav__btns" class="grid gap-4 grid-cols-5"></nav>
`;

  document
    .querySelector<HTMLInputElement>("#search-text")
    ?.addEventListener("keyup", listenerDispatcher);

  fetchPokemons();
};
