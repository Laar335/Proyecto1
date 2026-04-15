import Contador from "@/components/Contador.vue";
import ListaDeTareas from "@/components/ListaDeTareas.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  /*{
    path: "/",
    name: "home",
    component: HomeView,
  },
  */
  {
    path: "/lista-de-tareas",
    name: "Lista de actividades",
    component: ListaDeTareas,
  },
  {
    path: "/contador",
    name: "Contador",
    component: Contador,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
