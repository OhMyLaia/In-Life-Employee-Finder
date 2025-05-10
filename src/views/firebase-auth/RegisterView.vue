<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';
    import { SignStatus, AuthError } from '../../types';
    import { showStatusMessage, showAuthMessage, mapFirebaseError } from '../../utils/auth-utils';
    import GenericSignBox from './GenericSignBox.vue';

    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');
    const status: Ref<SignStatus> = ref(SignStatus.pending);
    const error: Ref<AuthError> = ref(AuthError.unknown);
    const router = useRouter();

    const handleRegisterUser = async () => {
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            showStatusMessage(SignStatus.success, router);
            status.value = SignStatus.success;
            console.log(`user registered successfully`);
            setTimeout(() => router.push('/home'), 1500)
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
    <div class="has-text-centered">
        <h1 class="is-size-4-mobile
            is-size-2-tablet
            has-text-black
            has-text-weight-bold
            mt-6
            mb-3
            ">IN LIFE PROJECTS</h1>
        <h3 class="is-size-4">Register</h3>
            <GenericSignBox
            :email="email"
            :password="password"
            @update:email="email = $event"
            @update:password="password = $event"
            :handleAuth="handleRegisterUser"
            :status="status"
            :showStatusMessage="showStatusMessage(SignStatus.success, router)"
            :showAuthMessage="showAuthMessage(error)"
            />
            <p class="has-text-black">
            Forgot your password? <RouterLink to="/*">Recover</RouterLink>
            </p>
            <p class="has-text-black">
            Already have an account? <RouterLink to="/">Login</RouterLink>
            </p>
    </div>
</template>
