import { createRouter, createWebHistory } from "vue-router";
import ListOfSources from "../components/ListOfSources.vue";
import ListOfArticle from "../components/ListOfArticle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ListOfSources,
    },
    {
      path: "/articles/:id",
      component: ListOfArticle,
    },
  ],
});

export default router;
