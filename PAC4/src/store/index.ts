import { reactive } from "vue";

interface SimpleStoreClass {
  storedPokemons: any[];
  theme: "light" | "dark";
}

export const simpleStore = reactive<SimpleStoreClass>({
  storedPokemons: [],
  theme: "light",
});
