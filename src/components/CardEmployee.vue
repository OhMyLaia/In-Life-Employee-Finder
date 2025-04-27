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
    <div class="
    section is-large
    ">
        <div class="
        box is-raised hover-to-popping
        is-medium
        "
        >
        <p class="text-3xl">{{ eName }}</p>
        <p class="text-2xl">{{ eRole }}</p>
        <p class="text-xl">{{ eLocation }}</p>
        <br>
        <div class="level">
            <div v-for="(skill) in eStack">
            <p>{{ skill }}</p>
            <br>
            </div>
            <GenericButton
            :text=" isToggled === false ?
                'See more' :
                'See less'"
            :class="'button is-info is-light mt-3'"
            @click="props.onClick"
            :toggleBtn="props.toggleBtn"
            />
            <p v-if="isToggled">{{ eDescription }}</p>
            <img
            class="img is-small"
            :src="ePicture">
            </div>
        </div>
    </div>

</template>