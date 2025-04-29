<script setup lang="ts">
import Header from '@/components/Header.vue';
import CardsContainer from '../components/CardsContainer.vue';
import GenericButton from '../components/GenericButton.vue';
import { useRoute } from 'vue-router';

const isActiveBtn = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath
}
</script>

<template>
    <div>
        <Header>
        </Header>
        <p
        class="
        text-2xl
        md:text-5xl
        text-black
        has-text-centered
        "
        >IN LIFE PROJECTS STAFF</p>
        <div class="has-text-centered">
            <RouterLink
            to="/finder">
                <GenericButton
                :text="'Filter staff'"
                :class="'button text-is-black mt-5 is-size-3-tablet'"
                @click="console.log(`going to finder`)"
                />
            </RouterLink>
        </div>
        <CardsContainer/>
    </div>
</template>