<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath
}

</script>

<template>
    <nav class="
    columns
    bg-blue-200">
        <div class="
        column
        text-xl
        md:text-5xl
        font-bold
        tracking-widest
        text-black
        ml-4
        mt-3
        ">
        IN LIFE PROJECTS
            <div class="
            flex
            flex-col
            text-start
            w-2/3
            bg-blue-200
            text-md
            font-light
            text-black
            ">
            IT Solutions
            </div>
        </div>
        <div class="
            column
            !bg-blue-400][p]
            ">
                <RouterLink
                to="/"
                :class="[
                    isActiveLink('/finder') ?
                    'font-extrabold' :
                    ''
                ]" >
                    <span class="text-sm md:text-2xl md: m-3 text-black is-pulled-right is-vcentered">Finder</span>
                </RouterLink>
                <RouterLink
                to="/finder"
                :class="[
                    isActiveLink('/') ?
                    'font-extrabold' :
                    ''
                ]" >
                    <span class="text-sm md:text-2xl md: m-3 text-black is-pulled-right">Home</span>
                </RouterLink>
        </div>
    </nav>
</template>