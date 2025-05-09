<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { EmployeeType } from '../types';
import GenericButton from './GenericButton.vue';
// import { useToggleDescriptionBtn } from '../stores/useToggleDescriptionBtn';

const toggleBtn = ref<boolean>(false);

const toggleBtnFun = () => toggleBtn.value = !toggleBtn.value

const toggleBtnValue = () => toggleBtn.value
defineProps<EmployeeType>();

// const toggleBtnStore = useToggleDescriptionBtn();


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
        <div class="has-text-left-tablet
        has-text-centered-mobile
        md:w-1/2">
            <h3 class="is-size-3-mobile is-size-3-tablet has-text-weight-semibold">{{ name }}</h3>
            <p class="is-size-4-mobile is-size-3-tablet">{{ role }}</p>
            <p class="is-size-5-mobile is-size-4-tablet mb-5">{{location }}</p>
        </div>
            <div class="columns
            is-vcentered
            has-text-left-tablet
            has-text-centered-mobile
            is-align-items-start">
                <div class="column is-6">
                    <br>
                    <div class="is-size-5-mobile
                    is-size-4-tablet"
                    v-for="(skill) in stack">
                        <p>{{ skill }}</p>
                    </div>
                    <GenericButton
                    :text="toggleBtnValue() === false ?
                        'See more' :
                        'See less'"
                        :class="'button is-info mt-3'"
                        @click="toggleBtnFun"/>
                    <p class="text-lg
                        md:text-2xl
                        is-italic
                        mt-3"
                        v-if="toggleBtnValue() === true">
                        {{ description }}</p>
                </div>
                <figure class="column
                is-6
                is-flex
                is-justify-content-center
                is-align-items-start">
                    <img class="is-rounded"
                    :src="picture">
                </figure>
            </div>
            </div>
        </div>
    </section>
</template>