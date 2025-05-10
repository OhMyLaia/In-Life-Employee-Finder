import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStackListStore = defineStore('stackListStore', () => {

    const stack = ref<string[]>([])

    const getStackList = computed(() => stack.value)

    const addTech = (newTech: string) => stack.value.push(newTech)

    const removeTech = (index: number) => stack.value.splice(index, 1);

    const clearStack = () => stack.value = []

    return {
        stack,
        getStackList,
        addTech,
        removeTech,
        clearStack
    }
})