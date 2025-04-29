<script setup lang="ts">
import { ref } from 'vue';
// store de tech para añadir al array
import { useStackListStore } from '../stores/useStackListStore';
// store de data.json
import { useEmployeeStore } from '../stores/useEmployeeListStore';
import type { EmployeeType } from '../types';

const stackListStore = useStackListStore();
const employeeStore = useEmployeeStore();

const name = ref('');
const role = ref('');
const location = ref('');
const newTechnology = ref('');
const description = ref('');

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
        picture: ''
    };

    employeeStore.addEmployee(employeeData)
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
                    <form @submit.prevent="addStackTechnology">
                        <div class="field is-required">
                            <label for="stack" class="label">Technology</label>
                            <input id="stack" class="input" v-model="newTechnology" type="text"
                                placeholder="Enter their stack (Vue, React, Node...)" />
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-info is-light mb-4" @click="addStackTechnology()">Add
                                tech to stack</button>
                        </div>
                    </form>
                </div>
            
                <div class="field is-required">
                    <label for="textfield" class="label"></label>
                    <textarea id="textfield" class="textarea" placeholder="Description" v-model="description"></textarea>
                </div>
            </form>
        </div>

    </div>


</template>