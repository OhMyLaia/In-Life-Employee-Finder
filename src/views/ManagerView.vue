<script setup lang="ts">
import { ref } from 'vue';
// store de tech para añadir al array
import { useStackListStore } from '../stores/useStackListStore';
// store de data.json
import useEmployeeStore from '../stores/useEmployeeListStore';
import type { EmployeeType } from '../types';
import GenericButton from '../components/GenericButton.vue';
import GenericInfoSpan from '../components/GenericButton.vue';

const stackListStore = useStackListStore();
const employeeStore = useEmployeeStore();

const name = ref('');
const role = ref('');
const location = ref('');
const newTechnology = ref('');
const description = ref('');
const nameToDelete = ref('');
const isSubmitted = ref<true | false | null>(null);

function addStackTechnology(newTech: string) {
    stackListStore.addTech(newTech);
    newTechnology.value = '';

}

function handleSubmit() {

    const employeeData: EmployeeType = {
        name: name.value,
        role: role.value,
        location: location.value,
        stack: stackListStore.stack,
        description: description.value,
        picture: '/02.svg'
    };

    // hay un re-render, FIX
    // me manda la data pero son strings vacios ???
    if (!name.value || !role.value || !location.value || !description.value) {
        console.log(`error, missing some required data`)
        isSubmitted.value = false;
        return
    }
    employeeStore.addEmployee(employeeData)

    name.value = '';
    role.value = '';
    location.value = '';
    description.value = '';
    newTechnology.value = '';
    stackListStore.clearStack();
    
    isSubmitted.value = true;
}


function deleteEmployee() {
    if (!nameToDelete) return alert(`Employee could not be deleted from database`);
    employeeStore.deleteEmployee(nameToDelete.value)
    nameToDelete.value = ''
}

//todo: fix bug of adding an extra object to the db

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
                            <li
                                v-for="(tech, index) in stackListStore.stack"
                                :key="tech"
                                class="is-flex is-align-items-center
                                mb-2
                                ">
                                <span class="mr-2">
                                    {{ tech.charAt(0).toUpperCase() + tech.slice(1) }}
                                </span>
                                <button
                                class="delete is-small has-background-red"
                                @click="stackListStore.removeTech(index)"
                                ></button>
                            </li>
                        </ul>
                    </div>
                    <GenericButton
                    type="button"
                    :text="'Add tech'"
                    :class="'button is-info is-light mb-5'"
                    @click="() => addStackTechnology(newTechnology)"
                    />
                </div>

                <div class="field is-required">
                    <label for="textfield" class="label"></label>
                    <textarea id="textfield" class="textarea" placeholder="Description"
                        v-model="description"></textarea>
                </div>
                <GenericButton
                type="submit"
                :text="'Submit'"
                :class="'button is-info is-light'"
                />
            </form>

            <p v-if="isSubmitted === true">
                <GenericInfoSpan
                :text="'Employee created successfully!'"
                class="has-text-info mt-2" />
            </p>

            <p v-if="isSubmitted === false">
                <GenericInfoSpan
                :text="'Something went wrong, try again.'"
                class="has-text-info mt-2" />
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

        <div class="field is-required">
        <label for="delete-name" class="label">Name</label>
        <input
            id="delete-name"
            class="input"
            type="text"
            placeholder="Enter employee name to delete"
            v-model="nameToDelete"
        />
        </div>

        <div class="control">
            <GenericButton
            type="submit"
            :text="'Delete'"
            :class="'button is-danger mb-6'"
            @click="deleteEmployee"
            />
        </div>
    </div>


</template>