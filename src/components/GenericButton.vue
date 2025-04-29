<script setup lang="ts">
import type { GenericButtonType } from '../types'; 

const props = defineProps<GenericButtonType>();

</script>


<template>
    <button
    :class="props.class"
    @click="onClick"
    :toggleBtn="toggleBtn"
    >{{ text }}</button>
</template>