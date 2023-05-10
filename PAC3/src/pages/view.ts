import { setDOMContent } from "./../dom";
import { fetchPokemon } from "../myFetch";

export interface viewPropsType {
  pid: number;
}

const getHtmlPokemonTypes = (types: { type: { name: string } }[]) => {
  let html = "";

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const btnHtml = `<span class="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">${element.type.name}</span>`;
    html += btnHtml;
  }

  return html;
};

const html = `
  <h1>Informació del Pokemon</h1>
  <div>
    <img id="poke__avatar-front" class="logo" alt="Pokemon logo front" />
    <img id="poke__avatar-back" class="logo" alt="Pokemon logo back" />
    <h1 class="text-indigo-500 dark:text-indigo-300 capitalize" id="poke__name"></h1>
  </div>

  
  <div class="w-full lg:w-50% m-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
      Informació bàsica
  </h5>
  <ul class="my-4 space-y-3 text-start list-none">
      <li>
          <section class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M216 28h-64a12 12 0 0 0-9.51 4.68l-61.23 79.6l-6.42-6.42a20 20 0 0 0-28.29 0l-16.69 16.69a20 20 0 0 0 0 28.29L45 166l-21.14 21.17a20 20 0 0 0 0 28.28l16.69 16.69a20 20 0 0 0 28.28 0L90 211l15.17 15.16a20 20 0 0 0 28.29 0l16.69-16.69a20 20 0 0 0 0-28.3l-6.42-6.41l79.6-61.23A12 12 0 0 0 228 104V40a12 12 0 0 0-12-12ZM54.69 212.34l-11-11L62 183l11 11Zm64.61-6L49.65 136.7l11.05-11l69.65 69.65ZM204 98.09l-77.39 59.53L121 152l47.51-47.5a12 12 0 0 0-17-17L104 135l-5.63-5.63L157.91 52H204Z"/></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Atac</span>
              <span class="bg-red-400 text-dark font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300" id="poke__attack"></span>
          </section>
      </li>
      <li>
          <section class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v58.8c0 92.36 78.1 123 93.76 128.18a19.6 19.6 0 0 0 12.48 0C149.9 237.78 228 207.16 228 114.8V56a20 20 0 0 0-20-20Zm-4 78.8c0 73.56-60.53 99.53-76 105c-15.47-5.42-76-31.39-76-104.95V60h152Z"/></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Defensa</span>
              <span class="bg-green-400 text-dark font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300" id="poke__defense"></span>
          </section>
      </li>
      <li>
          <section class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M216 28h-44a12 12 0 0 0 0 24h15l-19 19l-15.51-15.48a12 12 0 0 0-17 17L151 88l-10.42 10.46a76 76 0 1 0 17 17L168 105l15.51 15.52a12 12 0 0 0 17-17L185 88l19-19v15a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12Zm-83.23 168.8A52 52 0 1 1 148 160a52.05 52.05 0 0 1-15.23 36.8Z"/></svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Tipus</span>
              <section id="poke__types"></section>
          </section>
      </li>

  </ul>
</div>

`;

export const __render = async (params: viewPropsType) => {
  const pokeData = await fetchPokemon(params.pid);

  setDOMContent("app", html);

  setDOMContent("poke__name", pokeData.name);
  setDOMContent("poke__attack", pokeData.stats[1].base_stat);
  setDOMContent("poke__defense", pokeData.stats[2].base_stat);

  setDOMContent("poke__types", getHtmlPokemonTypes(pokeData.types));

  setDOMContent("poke__avatar-front", pokeData.sprites.front_default, "src");
  setDOMContent("poke__avatar-back", pokeData.sprites.back_default, "src");
};
