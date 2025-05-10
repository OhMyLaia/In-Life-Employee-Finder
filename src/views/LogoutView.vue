<script setup lang="ts">
import { useRouter } from 'vue-router';
import {signOut } from 'firebase/auth';
import { auth } from '../firebase';
import GenericButton from '../components/GenericButton.vue';

const router = useRouter();

const logoutFunction = async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
        setTimeout(() => router.push('/'), 1500)
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
</script>

<template>
    <div class="box is-popping has-text-centered m-6 is-rounded is-hoverable">
        <GenericButton
        :text="'Logout'"
        :class="'button is-danger'"
        @click="logoutFunction"/>
    </div>

</template>
