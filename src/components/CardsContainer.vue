<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { computed } from 'vue';
import type { EmployeeType, CardsContainerPropsType } from '../types';
import { useEmployeeStore } from '../stores/useEmployeeListStore';

const employeeStore = useEmployeeStore();
// const selectedRole = ref<roleType>(roleType.all);
const props = defineProps<CardsContainerPropsType>();

const filterEmployees = computed(() => {

    let filteredEmployees: EmployeeType[] = []

    if (props.filterByRole === "all") {
        filteredEmployees = employeeStore.getEmployeeList
    } else {
        filteredEmployees = employeeStore.getEmployeeList
        .filter(employee => employeeStore
        .cleanInput(employee.role)
        .includes(props.filterByRole ?? ''));
    }
    return filteredEmployees;
})

</script>

<template>
    <div class="
    columns
    is-multiline
    ">
        <div class="
        column
        is-full-mobile
        is-half-tablet"
        v-for="employee in filterEmployees"
            :key="employee.name">
                <CardEmployee
                :name="employee.name"
                :role="employee.role"
                :location="employee.location"
                :stack="employee.stack"
                :description="employee.description"
                :picture="employee.picture"
                />
        </div>
    </div>
</template>