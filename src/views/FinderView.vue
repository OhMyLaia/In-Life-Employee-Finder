<script setup lang="ts">
import { ref } from 'vue';
import GenericButton from '../components/GenericButton.vue';
import CardsContainer from "../components/CardsContainer.vue"
import { roleType } from '../types';
import { useToggleDescriptionBtn } from '../stores/useToggleDescriptionBtn';

const selectedRole = ref<roleType>(roleType.all);

const buttonClass = (role: roleType)  => {
    return selectedRole.value === role ?
        'button is-info is-light has-text-weight-bold m-5' :
        'button is-info is-light m-5';
}

const rolesArr: roleType[] = [roleType.all, roleType.senior, roleType.mid, roleType.junior, roleType.fullstack, roleType.frontend, roleType.backend, roleType.designer, roleType.manager];

</script>


<template>
    <section class="section">
        <div class="container">
            <h2 class="
            has-text-centered
            is-size-2
            ">Search per seniority</h2>
            <div class="
            has-text-centered
                ">
                <span v-for="(role, index) in rolesArr"
                :key="index">
                <GenericButton
                :text="rolesArr[index]"
                :class="buttonClass(rolesArr[index])"
                @click="selectedRole = rolesArr[index]"/>
                </span>
                <!-- <GenericButton
                :text="roleType.all"
                :class="buttonClass(roleType.all)"
                @click="selectedRole = roleType.all"
                />
                <GenericButton
                :text="roleType.senior"
                :class="buttonClass(roleType.senior)"
                @click="selectedRole = roleType.senior"
                />
                <GenericButton
                :text="roleType.mid"
                :class="buttonClass(roleType.mid)"
                @click="selectedRole = roleType.mid"
                />
                <GenericButton
                :text="roleType.junior"
                :class="buttonClass(roleType.junior)"
                @click="selectedRole = roleType.junior"
                />
                <GenericButton
                :text="roleType.fullstack"
                :class="buttonClass(roleType.fullstack)"
                @click="selectedRole = roleType.fullstack"
                />
                <GenericButton
                :text="roleType.frontend"
                :class="buttonClass(roleType.frontend)"
                @click="selectedRole = roleType.frontend"
                />
                <GenericButton
                :text="roleType.backend"
                :class="buttonClass(roleType.backend)"
                @click="selectedRole = roleType.backend"
                /> -->
            </div>
            <div>

            <CardsContainer :filterByRole="selectedRole" />

            </div>
        </div>
    </section>
</template>