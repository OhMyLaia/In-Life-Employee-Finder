<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { mapFirebaseError, showStatusMessage, showAuthMessage } from '../utils/auth-utils';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';
    import { SignStatus } from '../types';
    import { AuthError } from '../types'
    import GenericSignBox from './firebase-auth/GenericSignBox.vue';
    import InLifeImage from '../../public/01.svg'

    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');
    const status: Ref<SignStatus> = ref(SignStatus.pending);
    const error: Ref<AuthError> = ref(AuthError.unknown);
    const router = useRouter();

    const handleSignInUser = async () => {

    // firebase is returning a promise
    await signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            showStatusMessage(SignStatus.success, router);
            status.value = SignStatus.success;
            console.log(`user logged successfully`);
            setTimeout(() => router.push('/home'), 1500)
        })
        .catch((err) => {
            const mappedError = mapFirebaseError(err.code)
            showAuthMessage(mappedError);
            error.value = mappedError;
            status.value = SignStatus.failure;
            console.error(`error logging user, ${err}`);
        })
    }
</script>

<template>
    <div class="is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <h1 class="is-size-4-mobile
            is-size-1-tablet
            has-text-black
            has-text-weight-bold
            mt-6
            mb-3
            ">IN LIFE PROJECTS</h1>
            <h3 class="is-size-4 is-size-3-tablet">Login</h3>
        <GenericSignBox
        :email="email"
        :password="password"
        @update:email="email = $event"
        @update:password="password = $event"
        :handleAuth="handleSignInUser"
        :status="status"
        :showStatusMessage="showStatusMessage(SignStatus.success, router)"
        :showAuthMessage="showAuthMessage(error)"
        />
        <p class="has-text-black is-size-4-tablet">
            Don't have an account? <RouterLink to="/register">Register</RouterLink>
        </p>
        <img class="image w-3/4 is-rounded" :src="InLifeImage">
    </div>
</template>