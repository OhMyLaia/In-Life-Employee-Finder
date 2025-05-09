<script lang="ts">
    import type { infoSpanProps } from '../types';
    const props: infoSpanProps = defineProps<{
        text: '',
        customClass: '',
    }>()
</script>

<template>
    <span
    :class="props.customClass">{{ props.text }}</span>
</template>