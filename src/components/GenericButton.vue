<script setup lang="ts">
import type { GenericButtonProps } from '../types';

const props: GenericButtonProps = defineProps<{
    text: string,
    class: string,
    onClick: () => void,
    toggleBtn?: () => void
}>()

</script>


<template>
    <button
    :class="props.class"
    @click="props.onClick"
    :toggleBtn="props.toggleBtn"
    >{{ props.text }}</button>
</template>