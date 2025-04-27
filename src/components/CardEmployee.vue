<script setup lang="ts">

import { defineProps } from 'vue';
import type { CardPropsType } from '../types';
import GenericButton from './GenericButton.vue';
import { ref } from 'vue';

const props: CardPropsType = defineProps<{
    eName: string,
    eRole: string,
    eLocation: string
    eStack: string[],
    eDescription: string,
    ePicture: string,
    isToggled: boolean
    text: string,
    class: string,
    onClick: () => void,
    toggleBtn?: () => void
}>();

</script>

<template class="w-full">
    <div class="flex
    flex-col
    w-full
    items-center
    justify-center
    mx-auto
    

    ">
        <div class="
        box is-floating
        w-[90%]
        h-fit
        "
        >
        <h2>{{ eName }}</h2>
        <p>{{ eRole }}</p>
        <p>{{ eLocation }}</p>
        <div v-for="(skill) in eStack">
        <p>{{ skill }}</p>
        </div>
        <GenericButton
        :text=" isToggled === false ?
            'See more' :
            'See less'"
        :class="'bg-blue-200 rounded-md p-2'"
        @click="props.onClick"
        :toggleBtn="props.toggleBtn"
        />
        <p v-if="isToggled">{{ eDescription }}</p>
        <img :src="ePicture">
        </div>
    </div>

</template>