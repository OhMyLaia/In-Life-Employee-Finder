<script lang="ts">

type infoSpanProps = {
    text: string,
    customClass: string
}

const props: infoSpanProps = defineProps<{
    text: '',
    customClass: '',
}>()

</script>

<template>

<span
:class="props.customClass">{{ props.text }}</span>

</template>