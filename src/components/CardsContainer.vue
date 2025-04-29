<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { computed, ref } from 'vue';
import { roleType } from '../types';
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
        .cleanInput(employee.eRole)
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