<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { computed, ref } from 'vue';
import { roleType } from '../types';
import type { EmployeeType, CardsContainerPropsType } from '../types';
import { useEmployeeStore } from '../stores/useEmployeeListStore';

const employeeStore = useEmployeeStore();
const selectedRole = ref<roleType>(roleType.all);
defineProps<CardsContainerPropsType>();

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