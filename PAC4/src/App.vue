<template>
  <nav class="flex justify-between">
    <section class="flex gap-3">
      <RouterLink :to="{ name: 'Index' }" class="r-link flex items-center"
        ><div class="i-ph-house me-2" />
        Pàgina inicial</RouterLink
      >
      <!-- Tal vegada si tinc temps ho desenvolupi -->
      <!-- <RouterLink :to="{ name: 'Index' }" class="r-link flex items-center"
        ><div class="i-ph-trophy-fill me-2" />
        Batalla Pokemon</RouterLink
      > -->
    </section>
    <section class="cursor-pointer" @click="toggleTheme">
      <div class="i-ph-moon" v-if="simpleStore.theme == 'light'" />
      <div class="i-ph-sun" v-else />
    </section>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { setupDarkMode, toggleTheme } from "./utils/dom";
import { simpleStore } from "./store";

onMounted(() => setupDarkMode());
</script>
