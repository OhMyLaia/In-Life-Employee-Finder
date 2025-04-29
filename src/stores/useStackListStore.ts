import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStackListStore = defineStore('employeeStore', () => {

    const stack = ref<string[]>([])

    const getStackList = computed(() => stack.value)

    const addTech = (newTech: string) => {
        stack.value.push(newTech);
    }

    return {
        stack,
        getStackList,
        addTech
    }
})