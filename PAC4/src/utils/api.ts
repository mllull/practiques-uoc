export const _fetch = (url: string) => {
  return fetch(url).then((response) => response.json());
};

export const fetchPokemon = (pokemonId: number) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return _fetch(baseUrl);
};
