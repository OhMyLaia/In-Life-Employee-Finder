<script setup lang="ts">

import { ref } from 'vue';
import type { Ref } from 'vue';
import GenericButton from '../../components/GenericButton.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import GenericInfoSpan from '../../components/GenericButton.vue';
import { useRouter } from 'vue-router';

enum SignStatus {
    success = 'success',
    failure = 'failure',
    pending = 'pending'
}

enum AuthError {
    invalidEmail = 'invalid_email',
    invalidPassword = 'invalid_password',
    userNotFound = 'userNotFound',
    unknown = 'unknown'
}

const email: Ref<string, string> = ref('');
const password: Ref<string, string> = ref('');
const status: Ref<SignStatus> = ref(SignStatus.pending);
const error: Ref<AuthError> = ref(AuthError.unknown);


</script>

<template>
    <div class="box is-floating is-flex text-balance m-6">
        <div class="column is-flex is-flex-direction-column m-2">
            <input class="m-2 bg-blue-200 rounded" type="email" placeholder="  Email" v-model="email">
            <input class="m-2 bg-blue-200 rounded" type="password" placeholder="  Password" v-model="password">

            <GenericButton
            :text="'Submit'"
            :class="'button is-info m-2'"
            @click="handleRegisterUser" />

            <p v-if="status === SignStatus.success">
                <GenericInfoSpan
                :text="showStatusMessage(SignStatus.success)"
                class="has-text-info mt-2" />
            </p>
            <p v-if="status === SignStatus.failure">
                <GenericInfoSpan
                :text="showAuthMessage(error)"
                class="has-text-danger mt-2"
                />
            </p>
        </div>

    </div>

</template>
