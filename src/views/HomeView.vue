<script setup lang="ts">
import Header from '@/components/Header.vue';
import CardsContainer from '../components/CardsContainer.vue';
import { roleType } from '../types';
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
        >FIND AN EMPLOYEE</p>
        <CardsContainer
        :filterByRole="roleType.all"/>
    </div>
</template>