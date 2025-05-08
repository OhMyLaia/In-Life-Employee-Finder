<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import GenericButton from '../../components/GenericButton.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import GenericInfoSpan from '../../components/GenericButton.vue';

enum signStatus {
    success = 'success',
    failure = 'failure',
    pending = 'pending'
}

enum authError {
    invalidEmail = 'invalid_email',
    invalidPassword = 'invalid_password',
    userNotFound = 'userNotFound',
}

const email: Ref<string, string> = ref('');
const password: Ref<string, string> = ref('');
const status: Ref<signStatus> = ref(signStatus.pending);
const error: Ref<string, string> = ref('');

const showStatusMessage = (statusParam: signStatus) => {
    let message: string = '';
    switch (statusParam) {
        case 'success' :
            message = 'User registered successfully.'
            break;
        case 'failure' :
            message = 'Something went wrong, please try again'
            break;
        case 'pending' :
            message = '';
            break;
    }

    return message;
}

const handleRegisterUser = async () => {

    // this is returning a promise
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        showStatusMessage(signStatus.success);
        status.value = signStatus.success;
        console.log(`user registered successfully`);
    })
    .catch((err) => {
        showStatusMessage(signStatus.failure);
        error.value = `Error: ${err.message}`;
        status.value = signStatus.failure;
        console.error(`error registering user, ${err}`);
    })

}

</script>

<template>
    <div class="box">
        <div>
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <GenericButton
            :text="'Submit'"
            :class="'button is-info mt-3'"
            @click="handleRegisterUser"
            />
            <p v-if="signStatus.success">
                <GenericInfoSpan
                :text="showStatusMessage(signStatus.success)"
                class="text-is-danger"
                />
            </p>
        </div>

    </div>

</template>
