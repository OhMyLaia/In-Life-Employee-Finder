<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GenericSvg from '../components/GenericSvg.vue';
import GenericButton from '../components/GenericButton.vue';
import notFoundSvg from "/notFound.svg"
</script>

<template>
    <div class="section has-text-centered">
        <h1
        class="
        column
        is-size-3-mobile
        is-size-1-tablet
        has-text-red
        ">
        Error 404 not found
        </h1>
        <RouterLink
            to="/">
                <GenericButton
                :text="'I want to go home'"
                :class="'button is-warning is-size-3-tablet'"
                @click="console.log(`going home`)"
                />
            </RouterLink>
        <div
        class="image">
            <img :src="notFoundSvg">
        </div>

    </div>
</template>