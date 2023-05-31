<template>
  <div class="text-center container m-auto">
    <h1 class="mb-30">Tria un pokemon de la llista inferior</h1>
    <div class="relative mb-6">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <div class="i-ph-magnifying-glass text-xl"></div>
      </div>
      <input
        type="text"
        v-model="txtCerca"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Introdueix el nom d'un Pokemon d'abaix per poder filtrar."
      />
    </div>
    <nav class="grid gap-4 grid-cols-5" v-if="!loading">
      <RouterLink
        v-for="pokemon in pokFiltrats"
        :key="pokemon.id"
        :to="{ name: 'ViewPokemon', params: { idPokemon: pokemon.id } }"
        class="r-link"
        >{{ pokemon.name }}</RouterLink
      >
    </nav>
    <div v-else class="flex justify-center">
      <div class="i-ph-spiral text-8xl animate-spin"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { simpleStore } from "@/store";
import { fetchPokemon, getRandomNumber } from "@/utils";
import { computed, onMounted, ref } from "vue";

const NUM_FETCH_POKEMONS = 10;
const pokemons = ref([]);
const txtCerca = ref<string | null>(null);

const pokFiltrats = computed(() =>
  txtCerca.value
    ? pokemons.value.filter((p) => {
        const name: string = p.name;
        return name.startsWith(txtCerca.value);
      })
    : pokemons.value
);

const loading = ref(false);

const fetchPokemons = async () => {
  loading.value = true;
  for (let index = 0; index < NUM_FETCH_POKEMONS; index++) {
    let random = getRandomNumber();
    const poke = await fetchPokemon(random);
    pokemons.value.push(poke);
  }

  simpleStore.storedPokemons = pokemons.value;

  loading.value = false;
};

onMounted(() => fetchPokemons());
</script>
