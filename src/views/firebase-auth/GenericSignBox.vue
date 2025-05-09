<script setup lang="ts">
// import { ref } from 'vue';
// import type { Ref } from 'vue';
import GenericButton from '../../components/GenericButton.vue';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import GenericInfoSpan from '../../components/GenericButton.vue';
// import { useRouter } from 'vue-router';
import { SignStatus } from '../../types';
// import { AuthError } from '../../types';

const props = defineProps<{
    handleAuth: () => void;
    status: SignStatus;
    showStatusMessage: string;
    showAuthMessage: string;
}>()


// const email: Ref<string, string> = ref('');
// const password: Ref<string, string> = ref('');
// const status: Ref<SignStatus> = ref(SignStatus.pending);
// const error: Ref<AuthError> = ref(AuthError.unknown);
// const router = useRouter();

// const showStatusMessage = (statusParam: SignStatus) => {

//     let message: string = '';

//     if (statusParam === 'success' && router.currentRoute.value.path === '/register') {
//         message = 'User registered successfully.';

//     } else if (statusParam === 'success' && router.currentRoute.value.path === '/login') {
//         message = "Welcome again!";

//     } else if (statusParam === 'failure') {
//         message = 'Something went wrong, please try again';

//     } else {
//         message;
//     }

//     return message
// }

// const showAuthMessage = (authParam: AuthError) => {
//     switch (authParam) {
//         case AuthError.invalidEmail:
//             return 'Please enter a valid email.'
//         case AuthError.invalidPassword:
//             return 'Incorrect password.'
//         case AuthError.userNotFound:
//             return 'No user found with this email.'
//         default:
//             return 'Something went wrong, please try again.'
//     }
// }

</script>

<template>
    <div class="box is-floating is-flex text-balance m-5">
        <div class="column is-flex is-flex-direction-column m-2">
            <input class="m-2 bg-blue-200 rounded" type="email" placeholder="  Email" v-model="email">
            <input class="m-2 bg-blue-200 rounded" type="password" placeholder="  Password" v-model="password">

            <GenericButton
            :text="'Submit'"
            :class="'button is-info m-2'"
            @click="{{ props.handleAuth }}" />

            <p v-if="status === SignStatus.success">
                <GenericInfoSpan
                :text="props.showStatusMessage"
                class="has-text-info mt-2" />
            </p>

            <p v-if="status === SignStatus.failure">
                <GenericInfoSpan
                :text="props.showAuthMessage"
                class="has-text-danger mt-2"
                />
            </p>
        </div>

    </div>
</template>


<!-- <p v-if="status === SignStatus.success">
    <GenericInfoSpan
    :text="showStatusMessage(SignStatus.success)"
    class="has-text-info mt-2" />
</p>

<p v-if="status === SignStatus.failure">
    <GenericInfoSpan
    :text="showAuthMessage(error)"
    class="has-text-danger mt-2"
    />
</p> -->