import { defineStore } from "pinia";
import { ref } from "vue";

export const useToggleDescriptionBtn = defineStore('toggleDescriptionBtn', () => {
    const toggleBtn = ref<boolean>(false);

    const toggleBtnFun = () => toggleBtn.value = !toggleBtn.value

    const toggleBtnValue = () => toggleBtn.value

    return {
        toggleBtn,
        toggleBtnFun,
        toggleBtnValue
    };

})