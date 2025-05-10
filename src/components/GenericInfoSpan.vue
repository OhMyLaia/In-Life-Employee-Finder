<script setup lang="ts">
    import type { infoSpanProps } from '../types';

    const props: infoSpanProps = defineProps<{
        text: string;
        customClass: string;
    }>();

</script>

<template>
    <span
    :class="props.customClass">{{ props.text }}</span>
</template>