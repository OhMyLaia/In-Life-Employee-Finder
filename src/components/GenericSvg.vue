<script setup lang="ts">
defineProps<{
    icon: string,
    src?: string,
    width?: string,
    height?: string,
    color?: string
}>()
</script>

<template>
    <svg class="icon"
    :width="width || '24'"
    :height="height || '24'"
    :fill="color || 'currentColor'">
        <use :xlink:href="`${src || '/icons/bds-icons.min.svg'}#${icon}`" />
    </svg>
</template>