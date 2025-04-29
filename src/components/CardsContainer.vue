<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { computed, ref } from 'vue';
import { roleType } from '../types';
import type { EmployeeType } from '../types';
import { useEmployeeStore } from '../stores/useEmployeeListStore';

const employeeStore = useEmployeeStore();
const selectedRole = ref<roleType>(roleType.all)

const filterEmployees = computed(() => {

    let filteredEmployees: EmployeeType[] = []

    if (selectedRole.value === "all") {
        filteredEmployees = employeeStore.getEmployeeList
    } else {
        filteredEmployees = employeeStore.getEmployeeList
        .filter(employee => employeeStore.cleanInput(employee.eRole) === selectedRole.value);
    }
    return filteredEmployees;
})

</script>

<template>
    <div class="flex
    flex-col
    mx-auto
    w-full
    ">
        <p
        class="
        text-2xl
        md:text-5xl
        text-black
        has-text-centered
        "
        >FIND AN EMPLOYEE</p>
        <div v-for="employee in filterEmployees"
        :key="employee.eName">
            <CardEmployee
            :eName="employee.eName"
            :eRole="employee.eRole"
            :eLocation="employee.eLocation"
            :eStack="employee.eStack"
            :eDescription="employee.eDescription"
            :ePicture="employee.ePicture"
            />
        </div>
    </div>
</template>