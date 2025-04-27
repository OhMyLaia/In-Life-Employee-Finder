<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath
}

</script>

<template>
    <div class="flex
    w-full
    items-center-safe
    bg-blue-200">
        <div class="
        flex
        flex-col
        text-xl
        p-2
        font-bold
        tracking-widest
        justify-items-start
        w-2/3
        text-black
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
            flex
            flex-row
            text-md
            items-center-safe
            justify-between
            align-middle
            text-left
            w-1/3
            m-5">
                <RouterLink
                to="/"
                :class="[
                    isActiveLink('/') ?
                    'font-extrabold' :
                    ''
                ]" >
                    <span class="text-sm m-3 text-black">Home</span>
                </RouterLink>
                <RouterLink
                to="/finder"
                :class="[
                    isActiveLink('/finder') ?
                    'font-extrabold' :
                    ''
                ]" >
                    <span class="text-sm m-3 text-black">Finder</span>
                </RouterLink>
        </div>
    </div>
</template>