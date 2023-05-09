import { setDOMContent } from "./../dom";
import { fetchPokemon } from "../myFetch";

export interface viewPropsType {
  pid: number;
}

const html = `
  <h1>Informació del Pokemon</h1>
  <div>
    <img id="poke__avatar-front" class="logo" alt="Pokemon logo front" />
    <img id="poke__avatar-back" class="logo" alt="Pokemon logo back" />
    <h1 class="text-indigo-500 capitalize" id="poke__name"></h1>
  </div>
`;

export const __render = async (params: viewPropsType) => {
  const pokeData = await fetchPokemon(params.pid);

  setDOMContent("app", html);

  setDOMContent("poke__name", pokeData.name);
  setDOMContent("poke__avatar-front", pokeData.sprites.front_default, "src");
  setDOMContent("poke__avatar-back", pokeData.sprites.back_default, "src");
};
