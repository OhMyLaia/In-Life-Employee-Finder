<script setup lang="ts">
import { ref, onMounted } from 'vue';
// store de tech para añadir al array
import { useStackListStore } from '../stores/useStackListStore';
// store de data.json
import useEmployeeStore from '../stores/useEmployeeListStore';
import type { EmployeeType } from '../types';
import GenericButton from '../components/GenericButton.vue';
import GenericInfoSpan from '../components/GenericInfoSpan.vue';

const stackListStore = useStackListStore();
const employeeStore = useEmployeeStore();

const name = ref('');
// const id = ref('');
const role = ref('');
const location = ref('');
const newTechnology = ref('');
const description = ref('');
const idToDelete = ref('');
const isSubmittedAdd = ref<true | false | null>(null);
const isSubmittedDelete = ref<true | false | null>(null);

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
        isSubmittedAdd.value = false;
        return
    }

    try {
        await employeeStore.addEmployee(employeeData);
        const success = employeeStore.addEmployee(employeeData);
        isSubmittedAdd.value = success;

    } catch (error) {
        isSubmittedAdd.value = false;
        console.error("Error in handleSubmit:", error);
    }
    
    name.value = '';
    role.value = '';
    location.value = '';
    description.value = '';
    newTechnology.value = '';
    stackListStore.clearStack();

    setTimeout(() => {
        isSubmittedAdd.value = null;
    }, 3000);
}


async function handleDelete() {

    if (!idToDelete.value) {
        console.log('Please provide a valid ID');
        isSubmittedDelete.value = false;
        return;
    }

    const confirmed = window.confirm(`Are you sure you want to delete employee ID ${idToDelete.value}?`);
    if (!confirmed) {
        return;
    }

    try {
        await employeeStore.deleteEmployee(idToDelete.value);
        isSubmittedDelete.value = true;
        idToDelete.value = '';
    } catch (error) {
        isSubmittedDelete.value = false;
        console.log('Failed to delete:', error);
    }

    setTimeout(() => {
        isSubmittedDelete.value = null;
    }, 3000);
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
        <div>
            <p v-if="isSubmittedAdd === true">
                <GenericInfoSpan :text="'Employee created successfully!'" customClass="has-text-info mt-2 mb-6" />
            </p>
    
            <p v-if="isSubmittedAdd === false">
                <GenericInfoSpan :text="'Something went wrong, try again.'" customClass="has-text-info mt-2 mb-6" />
            </p>
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

            <p v-if="isSubmittedDelete === true">
            <GenericInfoSpan
            :text="'Employee deleted from the database.'" 
            customClass="has-text-info mb-2"
            />
        </p>
        <p v-if="isSubmittedDelete === false">
            <GenericInfoSpan
            :text="'Error, could not delete employee. Please, try again.'"
            customClass="has-text-info mb-2" />
        </p>

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