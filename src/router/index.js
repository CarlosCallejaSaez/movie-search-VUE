import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Video from "@/views/Video.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/video",
    component: Video,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
