import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FinderView from "@/views/FinderView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/finder",
            name: "finder",
            component: FinderView
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView
        },
    ],
});

export default router;