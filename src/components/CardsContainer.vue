<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { ref, reactive } from 'vue';
import EmployeeList from "../data/employeeList.json"
import type { CardPropsType } from '../types';

const employees = ref(EmployeeList.employees)

// const isToggled = ref(false)

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
        text-2xl
        md:text-5xl
        text-black
        has-text-centered
        "
        >FIND AN EMPLOYEE</p>
        <div v-for="employee in employees"
        :key="employee.eName">
            <CardEmployee
            :eName="employee.eName"
            :eRole="employee.eRole"
            :eLocation="employee.eLocation"
            :eStack="employee.eStack"
            :eDescription="employee.eDescription"
            :ePicture="employee.ePicture"
            text="Default Text"
            class="default-class"
            />
        </div>

    </div>

</template>