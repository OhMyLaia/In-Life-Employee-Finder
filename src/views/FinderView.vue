<script setup lang="ts">
import { ref } from 'vue';
import GenericButton from '../components/GenericButton.vue';
import CardsContainer from "../components/CardsContainer.vue"
import { roleType } from '../types';
import { useToggleDescriptionBtn } from '../stores/useToggleDescriptionBtn';

const selectedRole = ref<roleType>(roleType.all);
const isActive = ref<boolean>(false);
const activeValue = isActive.value;

const toggleIsActive = () => isActive.value = !isActive.value

const buttonClass = (param: boolean): string => {
    let style: string = "";
    param === false ?
        style = 'button is-info is-light m-5' :
        style = 'button is-info is-light m-5';
    return style;
}


</script>


<template>
    <section class="section">
        <div class="container">
            <h2 class="
            has-text-centered
            is-size-2
            m-2
            ">Search per role</h2>
            <div class="
                flex
                flex-row
                justify-center
                ">
                <GenericButton
                :text="roleType.all"
                :class="buttonClass(activeValue)"
                @click="selectedRole = roleType.all"
                :toggleBtnFun="toggleIsActive" />
                <GenericButton
                :text="roleType.fullstack"
                :class="buttonClass(activeValue)"
                @click="selectedRole = roleType.fullstack"
                />
                <GenericButton
                :text="roleType.frontend"
                :class="buttonClass(activeValue)"
                @click="selectedRole = roleType.frontend"
                />
                <GenericButton
                :text="roleType.backend"
                :class="buttonClass(activeValue)"
                @click="selectedRole = roleType.backend"
                />
            </div>
            <div>
                <div v-if="roleType.all">
                    <CardsContainer :filterByRole="selectedRole" />
                </div>
            </div>
        </div>
    </section>
</template>