<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useStackListStore } from '../stores/useStackListStore';
    import useEmployeeStore from '../stores/useEmployeeListStore';
    import type { EmployeeType } from '../types';
    import GenericButton from '../components/GenericButton.vue';

    const stackListStore = useStackListStore();
    const employeeStore = useEmployeeStore();

    const name = ref('');
    const role = ref('');
    const location = ref('');
    const newTechnology = ref('');
    const description = ref('');
    const idToDelete = ref('');

    onMounted(() => {
        employeeStore.fetchEmployees();
    });

    function addStackTechnology(newTech: string) {
        stackListStore.addTech(newTech);
        newTechnology.value = '';
    }

    async function handleSubmit() {
        const employeeData: EmployeeType = {
            name: name.value,
            id: String(Date.now()),
            role: role.value,
            location: location.value,
            stack: stackListStore.stack,
            description: description.value,
            picture: '/02.svg'
        };

        if (!name.value || !role.value || !location.value || !description.value) {
            console.log(`error, missing some required data`);
            return;
        }

        try {
            await employeeStore.addEmployee(employeeData);
            alert(`Employee ${name.value} added successfully!`);

        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
        
        name.value = '';
        role.value = '';
        location.value = '';
        description.value = '';
        newTechnology.value = '';
        stackListStore.clearStack();
    }


    async function handleDelete() {

        if (!idToDelete.value) {
            console.log('Please provide a valid ID');
            return;
        }

        const confirmed = window.confirm(`Are you sure you want to delete employee ID ${idToDelete.value}?`);
        if (!confirmed) return;
        try {
            await employeeStore.deleteEmployee(idToDelete.value);
            idToDelete.value = '';
        } catch (error) {

            console.log('Failed to delete:', error);
        }
    }
</script>

<template>
    <div class="container m-5">
        <h3 class="
        is-size-3-mobile
        is-size-3-tablet
        has-text-weight-semibold
        has-text-black
        m-1
        mb-3
        mt-3">
            Add new employee</h3>
        <div>
            <form @submit.prevent="handleSubmit">
                <div class="field is-required">
                    <label for="name" class="label"></label>
                    <input id="name" class="input" type="text" placeholder="Name" v-model="name">
                </div>
                <div class="field is-required">
                    <label for="role" class="label"></label>
                    <input id="role" class="input" type="text" placeholder="Role" v-model="role">
                </div>
                <div class="field is-required">
                    <label for="location" class="label"></label>
                    <input id="location" class="input" type="text" placeholder="Location" v-model="location">
                </div>
                <div class="has-text-left">
                    <div class="field text-is-small">
                        <label for="stack" class="label"></label>
                        <input id="stack" class="input" v-model="newTechnology" type="text"
                            placeholder="Enter employee's stack and click 'add tech'" />
                    </div>
                    <div class="control is-flex is-direction-column">
                        <ul class="mt-3 ml-1">
                            <li v-for="(tech, index) in stackListStore.stack"
                            :key="tech"
                            class="is-flex is-align-items-center mb-2">
                                <span class="mr-2">
                                    {{ tech.charAt(0).toUpperCase() + tech.slice(1) }}
                                </span>
                                <button class="delete is-small has-background-red"
                                    @click="stackListStore.removeTech(index)"></button>
                            </li>
                        </ul>
                    </div>
                    <GenericButton type="button" :text="'Add tech'" :class="'button is-info is-light mb-5'"
                        @click="() => addStackTechnology(newTechnology)" />
                </div>
                <div class="field is-required">
                    <label for="textfield" class="label"></label>
                    <textarea id="textfield" class="textarea" placeholder="Description"
                        v-model="description"></textarea>
                </div>
                <GenericButton type="submit" :text="'Submit'" :class="'button is-info is-light'" />
            </form>
        </div>
        <h3 class="
            is-size-3-mobile
            is-size-3-tablet
            has-text-weight-semibold
            has-text-black
            m-1
            mb-3
            mt-6">
            Delete employee</h3>

        <div class="field is-required">
            <label for="delete-name" class="label">ID</label>
            <input id="delete-id" class="input" type="text" placeholder="Enter employee id to delete"
                v-model="idToDelete" />
        </div>
        <GenericButton type="button"
        :text="'Delete'"
        :class="'button is-danger mb-3'"
        @click="handleDelete" />
        </div>
</template>