<script setup lang="ts">

import { defineProps } from 'vue';
import type { CardPropsType } from '../types';

const props: CardPropsType = defineProps<{
    eName: string,
    eRole: string,
    eLocation: string
    eStack: string[],
    eDescription: string,
    ePicture: string
}>();

</script>

<template class="w-full">
    <div>
        <div class="
        box is-floating
        w-full
        h-fit
        "
        >
        <h2>{{ eName }}</h2>
        <p>{{ eRole }}</p>
        <p>{{ eLocation }}</p>
        <div v-for="(skill) in eStack">
        <p>{{ skill }}</p>
        </div>
        <p>{{ eDescription }}</p>
        <button></button>
        <img :src="ePicture">
        </div>
    </div>

</template>