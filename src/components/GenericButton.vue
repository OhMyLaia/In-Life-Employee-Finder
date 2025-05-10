<script setup lang="ts">
import type { GenericButtonType } from '../types'; 

const props: GenericButtonProps = defineProps<{
    text: string;
    class: string;
    onClick?: () => void,
    toggleBtn?: () => void
}>()

</script>


<template>
    <button
    :class="props.class"
    @click="onClick"
    :toggleBtn="toggleBtn"
    >{{ text }}</button>
</template>