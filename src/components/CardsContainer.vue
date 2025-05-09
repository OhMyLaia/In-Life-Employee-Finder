<script setup lang="ts">
    import CardEmployee from './CardEmployee.vue';
    import { computed, onMounted } from 'vue';
    import { type CardsContainerPropsType, roleType } from '../types';
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
    mx-auto
    ">
        <div
        class="
        is-full-mobile
        is-half-tablet
        "
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
        <div class="column has-text-centered is-size-4"
        v-if="employeeStore.getEmployeeList.length === 0">
            Loading employees...
        </div>
    </div>
</template>

<style scoped>

* {
    outline-color: red;
    outline-width: 2px;
}

</style>