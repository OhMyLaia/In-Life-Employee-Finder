<script setup lang="ts">
import { ref } from 'vue';
// store de tech para añadir al array
import { useStackListStore } from '../stores/useStackListStore';
// store de data.json
import { useEmployeeStore } from '../stores/useEmployeeListStore';
import type { EmployeeType } from '../types';
import GenericButton from '../components/GenericButton.vue';

const stackListStore = useStackListStore();
const employeeStore = useEmployeeStore();

const name = ref('');
const role = ref('');
const location = ref('');
const newTechnology = ref('');
const description = ref('');
const nameToDelete = ref('');

const message = ref('')

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
        picture: '/03.svg'
    };

    if (!employeeData) return message.value =`Employee could not be added to database`;
    employeeStore.addEmployee(employeeData);
    message.value =`Employee successfully added to database!`;
    

    name.value = '';
    role.value = '';
    location.value = '';
    description.value = '';
    newTechnology.value = '';
    stackListStore.clearStack();
}


function deleteEmployee() {
    if (!nameToDelete) return message.value = `Employee could not be deleted from database`;
    employeeStore.deleteEmployee(nameToDelete.value);
    message.value =`Employee successfully deleted from database!`;
    nameToDelete.value = '';
}

</script>

<template>
    <div class="container m-5 has-text-centered">
        <h3 class="
        is-size-3-mobile
        is-size-3-tablet
        has-text-weight-semibold
        has-text-black
        m-5">
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
                    <div class="field is-required">
                        <label for="stack" class="label">Technology</label>
                        <input id="stack" class="input" v-model="newTechnology" type="text"
                            placeholder="Enter their stack (Vue, React, Node...)" />
                    </div>
                    <div class="control has-text-centered">
                        <button type="button" @click="() => addStackTechnology(newTechnology)"
                            class="button is-info is-light mb-4">
                            Add tech to stack
                        </button>
                    </div>
                </div>

                <div class="field is-required">
                    <label for="textfield" class="label"></label>
                    <textarea id="textfield" class="textarea" placeholder="Description"
                        v-model="description"></textarea>
                </div>
                <GenericButton
                type="submit"
                :text="'Submit'"
                :class="'button is-info is-light m-4'"
                @click="handleSubmit()" />
                <p v-if="message" class="notification text-black mt-4">{{ message }}</p>
            </form>
        </div>
        <h3 class="
            is-size-3-mobile
            is-size-3-tablet
            has-text-weight-semibold
            has-text-black
            m-5">
            Delete employee</h3>

        <div class="field is-required">
        <label for="delete-name" class="label"></label>
        <input
            id="delete-name"
            class="input"
            type="text"
            placeholder="Enter employee's full name to delete"
            v-model="nameToDelete"
        />
        </div>

        <div class="control">
        <button class="button is-danger" type="button" @click="deleteEmployee">
            Delete
        </button>
        </div>
    </div>


</template>