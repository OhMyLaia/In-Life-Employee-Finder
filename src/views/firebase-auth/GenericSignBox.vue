<script setup lang="ts">
    import GenericButton from '../../components/GenericButton.vue';
    import GenericInfoSpan from '../../components/GenericButton.vue';
    import { SignStatus } from '../../types';

    const props = defineProps<{
        email: string;
        password: string;
        handleAuth: () => void;
        status: SignStatus;
        showStatusMessage: string;
        showAuthMessage: string;
    }>();

    const emit = defineEmits<{
        (event: 'update:email', value: string): void;
        (event: 'update:password', value: string): void;
    }>()
</script>

<template>
    <div class="box is-floating is-flex text-balance m-5">
        <div class="column is-flex is-flex-direction-column m-2">
            <input
            class="m-2 bg-blue-200 rounded"
            type="email"
            placeholder="  Email"
            :value="props.email"
            @input="emit('update:email', ($event.target as HTMLInputElement)?.value || '')"
            >
            <input
            class="m-2 bg-blue-200 rounded"
            type="password"
            placeholder="  Password"
            :value="props.password"
            @input="emit('update:password', ($event.target as HTMLInputElement)?.value || '')"
            >
            <GenericButton :text="'Submit'" :class="'button is-info m-2'" @click="props.handleAuth" />
            <p v-if="status === SignStatus.success">
                <GenericInfoSpan :text="props.showStatusMessage" class="has-text-info mt-2" />
            </p>
            <p v-if="status === SignStatus.failure">
                <GenericInfoSpan :text="props.showAuthMessage" class="has-text-danger mt-2" />
            </p>
        </div>
    </div>
</template>