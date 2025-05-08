import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FinderView from "@/views/FinderView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ManagerView from "@/views/ManagerView.vue";
import SignHomeView from "@/views/SignHomeView.vue";
import LoginView from "@/views/firebase-auth/LoginView.vue";
import RegisterView from "@/views/firebase-auth/RegisterView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            component: HomeView
        },
        {
            path: "/finder",
            name: "finder",
            component: FinderView
        },
        {
            path: "/staff-manager",
            name: "staff-manager",
            component: ManagerView
        },
        {
            path: "/",
            name: "auth-user",
            component: SignHomeView
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView
        },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth'}
    }
});

export default router;