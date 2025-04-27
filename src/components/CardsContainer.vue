<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { ref, reactive } from 'vue';
import EmployeeList from "../data/employeeList.json"
import type { CardPropsType } from '../types';

const employees = ref(EmployeeList.employees)

</script>

<template>
    <p>Find an employee</p>
    <div v-for="employee in employees" :key="employee.eName">
        <CardEmployee
        :eName="employee.eName"
        :eRole="employee.eRole"
        :eLocation="employee.eLocation"
        :eStack="employee.eStack"
        :eDescription="employee.eDescription"
        :ePicture="employee.ePicture"
        />
    </div>

</template>