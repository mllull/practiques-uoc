import { getRandomNumber } from "../utils";
import { fetchPokemon } from "../myFetch";
import { appDOMContent, setDOMContent } from "../dom";
import { routerSetupHandlers } from "../router";

const fetchPokemons = async () => {
  for (let index = 0; index < 10; index++) {
    let random = getRandomNumber();
    const poke = await fetchPokemon(random);
    const pokeBtn = `<button route-link to="view" pid="${poke.id}">${poke.name}</button>`;
    appDOMContent("nav__btns", pokeBtn);
  }

  routerSetupHandlers();
};

export const __render = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1 class="mb-30">Tria un pokemon de la llista inferior</h1>
  <nav id="nav__btns" class="grid gap-4 grid-cols-5">
  </nav>
`;

  fetchPokemons();
};
