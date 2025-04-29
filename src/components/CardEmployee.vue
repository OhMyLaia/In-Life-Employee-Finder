<script setup lang="ts">

import { defineProps } from 'vue';
import type { CardPropsType, EmployeeType } from '../types';
import GenericButton from './GenericButton.vue';
import { useToggleDescriptionBtn } from '../stores/useToggleDescriptionBtn';

defineProps<EmployeeType>();

const toggleBtnStore = useToggleDescriptionBtn();

</script>

<template>
    <section
    class="
    section
    ">
    <div class="container">
        <div class="
        box is-small
        is-raised
        hover-to-popping
        has-radius-bold
        is-medium
        is-gapless
        is-marginless
        !bg-blue-100
        ">
        <h3 class="is-size-3-mobile is-size-3-tablet has-text-weight-semibold">{{ name }}</h3>
        <p class="is-size-4-mobile is-size-3-tablet">{{ role }}</p>
        <p class="is-size-5-mobile is-size-4-tablet">{{location }}</p>
            <div class="columns is-vcentered">
                <div class="column is-6">
                    <br>
                    <div class="is-size-5-mobile is-size-4-tablet"
                    v-for="(skill) in stack">
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
                        {{ description }}</p>
                </div>
                <div class="column is-6 !bg-blue-200">
                    <img class=""
                    :src="picture">
                </div>
                </div>
            </div>
        </div>
    </section>
</template>