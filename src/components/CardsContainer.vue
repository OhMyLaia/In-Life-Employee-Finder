<script setup lang="ts">
import CardEmployee from './CardEmployee.vue';
import { computed, onMounted } from 'vue';
import { type EmployeeType, type CardsContainerPropsType, roleType } from '../types';
import useEmployeeStore from '../stores/useEmployeeListStore';

const employeeStore = useEmployeeStore();

const props = defineProps<CardsContainerPropsType>();

onMounted(() => {
    employeeStore.fetchEmployees();
});

const filteredEmployees = computed(() => {
    const role = props.filterByRole ?? roleType.all;
    return employeeStore.filterEmployees(role);
})


</script>

<template>
    <div class="
    columns
    is-multiline
    ">
        <div
        class="
        column
        is-full-mobile
        is-half-tablet"
        v-for="employee in filteredEmployees"
            :key="employee.name">
                <CardEmployee
                :name="employee.name || 'No name'"
                :role="employee.role || 'No role assigned'"
                :location="employee.location || 'No location known'"
                :stack="employee.stack || ''"
                :description="employee.description || '...'"
                :picture="employee.picture || '...'"
                />
        </div>
        <div v-if="employeeStore.getEmployeeList.length === 0">
            Loading employees...
        </div>
    </div>
</template>