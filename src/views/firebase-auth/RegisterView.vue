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
const router = useRouter();

const showStatusMessage = (statusParam: SignStatus) => {
    let message: string = '';
    switch (statusParam) {
        case 'success':
            message = 'User registered successfully.'
            break;
        case 'failure':
            message = 'Something went wrong, please try again'
            break;
        case 'pending':
            message = '';
            break;
    }

    return message;
}

const showAuthMessage = (authParam: AuthError) => {
    switch (authParam) {
        case AuthError.invalidEmail:
            return 'Please enter a valid email.'
        case AuthError.invalidPassword:
            return 'Incorrect password.'
        case AuthError.userNotFound:
            return 'No user found with this email.'
        default:
            return 'Something went wrong, please try again.'
    }
}

    const mapFirebaseError = (firebaseCode: string): AuthError => {
        switch (firebaseCode) {
            case 'auth/invalid-email':
                return AuthError.invalidEmail
            case 'auth/wrong-password':
                return AuthError.invalidPassword
            case 'auth/user-not-found':
                return AuthError.userNotFound
            default:
                return AuthError.unknown
        }
    }

    const handleRegisterUser = async () => {

        // this is returning a promise
        await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                showStatusMessage(SignStatus.success);
                status.value = SignStatus.success;
                console.log(`user registered successfully`);
                router.push('/home')
            })
            .catch((err) => {
                const mappedError = mapFirebaseError(err.code)
                showAuthMessage(mappedError);
                error.value = mappedError;
                status.value = SignStatus.failure;
                console.error(`error registering user, ${err}`);
            })

    }

</script>

<template>
    <div class="box is-floating is-flex">
        <div class="column is-flex is-flex-direction-column m-2">
            <input class="m-2 bg-blue-200 rounded" type="email" placeholder="  Email" v-model="email">
            <input class="m-2 bg-blue-200 rounded" type="password" placeholder="  Password" v-model="password">

            <GenericButton
            :text="'Submit'"
            :class="'button is-info m-2'"
            @click="handleRegisterUser" />

            <p v-if="SignStatus.success">
                <GenericInfoSpan
                :text="showStatusMessage(SignStatus.success)"
                class="has-text-info mt-2" />
            </p>
            <p v-if="SignStatus.failure">
                <GenericInfoSpan
                :text="showAuthMessage(error)"
                class="has-text-danger mt-2"
                />
            </p>
        </div>

    </div>

</template>
