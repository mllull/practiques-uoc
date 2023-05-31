import { createWebHistory, createRouter } from "vue-router";
import Index from "@/views/index.vue";
import ViewPokemon from "@/views/viewPokemon.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/view/:idPokemon",
    name: "ViewPokemon",
    component: ViewPokemon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
