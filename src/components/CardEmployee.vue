<script setup lang="ts">

import { defineProps } from 'vue';
import type { CardPropsType, EmployeeType } from '../types';
import GenericButton from './GenericButton.vue';
import { useToggleDescriptionBtn } from '../stores/useToggleDescriptionBtn';

defineProps<EmployeeType>();

const toggleBtnStore = useToggleDescriptionBtn();

</script>

<template>
    <section class="
    section is-large">
        <div class="
        box is-small
        is-raised
        hover-to-popping
        has-radius-bold
        is-medium
        !bg-blue-100
        ">
        <div class="columns is-vcentered">
            <div class="column is-6">
                <p class="text-3xl md:text-5xl">{{ eName }}</p>
                <p class="text-2xl md:text-4xl">{{ eRole }}</p>
                <p class="text-xl md:text-3xl">{{ eLocation }}</p>
                <br>
                <div class="text-xl md:text-2xl"
                v-for="(skill) in eStack">
                    <p>{{ skill }}</p>
                </div>
                <GenericButton
                :text="toggleBtnStore.toggleBtnValue() === false ?
                    'See more' :
                    'See less'"
                    :class="'button is-info mt-3'"
                    @click="toggleBtnStore.toggleBtnFun"/>
                <p class="text-lg
                    md:text-2xl
                    is-italic
                    mt-3"
                    v-if="toggleBtnStore.toggleBtnValue() === true">
                    {{ eDescription }}</p>
            </div>
            <div class="column is-6 !bg-blue-200">
                <img class="w-full
                    h-auto
                    object-contain
                    mx-auto
                    md:w-full"
                :src="ePicture">
            </div>
        </div>
        </div>
    </section>
</template>