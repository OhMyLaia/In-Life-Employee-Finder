<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <Navbar />
    <nav>
        <RouterLink>routerlink to home feed register login</RouterLink>
    </nav>
    <RouterView />
</template>
