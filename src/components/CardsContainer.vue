<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { ref, reactive } from 'vue';
import EmployeeList from "../data/employeeList.json"
import type { CardPropsType } from '../types';

const employees = ref(EmployeeList.employees)

const isToggled = ref(false)
const toggleBtnFun = () => isToggled.value = !isToggled.value

</script>

<template>
    <div class="flex
    flex-col
    mx-auto
    w-full
    gap-5
    ">
        <p
        class="
        flex
        justify-center
        text-center
        text-xl
        text-black
        p-5
        "
        >Find an employee</p>
        <div v-for="employee in employees"
        :key="employee.eName">
            <CardEmployee
            :eName="employee.eName"
            :eRole="employee.eRole"
            :eLocation="employee.eLocation"
            :eStack="employee.eStack"
            :eDescription="employee.eDescription"
            :ePicture="employee.ePicture"
            :isToggled="isToggled"
            text="Default Text"
            class="default-class"
            :onClick="toggleBtnFun"
            />
        </div>

    </div>

</template>