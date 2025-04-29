<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath
}

</script>

<!-- <template>
    <nav class="
    columns is-vcentered is-mobile bg-blue-200 px-4 py-2
    ">
        <div class="
        column
        is-two-thirds
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
            is-two-thirds
            text-start
            bg-blue-200
            text-md
            font-light
            text-black
            ">
            IT Solutions
            </div>
        </div>
        <span class="column is-mobile">
            <RouterLink
            to="/finder"
            :class="[
                isActiveLink('/finder') ?
                'font-extrabold hover:underline' :
                ''
                ]"
            >
                <span class="text-sm md:text-2xl m-3 text-black is-pulled-right is-vcentered">Finder</span>
            </RouterLink>
            <RouterLink
            to="/"
            :class="[
                isActiveLink('/') ?
                'font-extrabold hover:underline' :
                ''
                ]" >
                <span class="text-sm md:text-2xl m-3 text-black is-pulled-right">Home</span>
            </RouterLink>
        </span>
    </nav>
</template> -->

<template>
    <nav class="columns is-vcentered is-mobile bg-blue-200 p-3">
        <!-- Left: Logo -->
        <div class="column">
            <h1 class=" is-size-2 has-text-black">IN LIFE PROJECTS</h1>
            <p class="subtitle is-3 has-text-black">IT Solutions</p>
        </div>

        <!-- Right: Navigation -->
        <div class="column is-narrow has-text-right">
            <RouterLink
            to="/"
            :class="[
                isActiveLink('/') ?
                'has-text-weight-bold has-text-black'
                :
                'has-text-black',
            ]"
            class="ml-5">
                <span class="is-size-4">Home</span>
            </RouterLink>
            <RouterLink
            to="/finder"
            :class="[
                isActiveLink('/finder') ?
                'has-text-weight-bold has-text-black'
                :
                'has-text-black',
            ]"
            class="ml-5">
                <span class="is-size-4">Finder</span>
            </RouterLink>
        </div>
    </nav>
</template>