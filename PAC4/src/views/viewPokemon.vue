<template>
  <div class="text-center container m-auto" v-if="pokemon">
    <section>
      <h1>Informació del Pokemon</h1>
      <div>
        <div v-if="showLoading" class="flex justify-center">
          <div class="i-ph-spiral text-6xl animate-spin"></div>
        </div>
        <section v-show="!showLoading">
          <img
            :src="pokemon.sprites.front_default"
            class="logo"
            alt="Pokemon logo front"
            @load="imgLoaded++"
          />
          <img
            :src="pokemon.sprites.back_default"
            class="logo"
            alt="Pokemon logo back"
            @load="imgLoaded++"
          />
        </section>
        <h1 class="text-indigo-500 dark:text-indigo-300 capitalize">
          {{ pokemon.name }}
        </h1>
      </div>

      <div
        class="w-full lg:w-50% m-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5
          class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white"
        >
          Informació bàsica
        </h5>
        <ul class="my-4 space-y-3 text-start list-none">
          <li>
            <section
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <div class="i-ph-sword text-4xl"></div>
              <span class="flex-1 ml-3 whitespace-nowrap">Atac</span>
              <span
                class="bg-red-400 text-dark font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                >{{ pokemon.stats[1].base_stat }}</span
              >
            </section>
          </li>
          <li>
            <section
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <div class="i-ph-shield text-4xl"></div>
              <span class="flex-1 ml-3 whitespace-nowrap">Defensa</span>
              <span
                class="bg-green-400 text-dark font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
                >{{ pokemon.stats[2].base_stat }}</span
              >
            </section>
          </li>
          <li>
            <section
              class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <div class="i-ph-gender-transgender-bold text-4xl"></div>
              <span class="flex-1 ml-3 whitespace-nowrap">Tipus</span>
              <section>
                <span
                  class="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300"
                  v-for="tipus in pokemon.types"
                  :key="tipus"
                  >{{ tipus.type.name }}</span
                >
              </section>
            </section>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div v-if="!pokemon" class="flex justify-center">
    <div class="i-ph-spiral text-8xl animate-spin"></div>
  </div>
</template>

<script setup lang="ts">
import { simpleStore } from "@/store";
import { fetchPokemon } from "@/utils";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pokemon = ref();
const imgLoaded = ref(0);

const showLoading = computed(() => imgLoaded.value < 2);

const fetchData = () => {
  fetchPokemon(parseInt(route.params.idPokemon.toString())).then((data) => {
    pokemon.value = data;
  });
};

onMounted(() => {
  if (simpleStore.storedPokemons.length) {
    pokemon.value = simpleStore.storedPokemons.find(
      (p) => parseInt(p.id) == parseInt(route.params.idPokemon)
    );
    if (!pokemon.value) fetchData();
  } else fetchData();
});
</script>
