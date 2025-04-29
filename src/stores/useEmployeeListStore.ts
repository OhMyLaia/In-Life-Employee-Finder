import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { EmployeeType } from '../types';
import EmployeeList from "../data/employeeList.json"

export const useEmployeeStore = defineStore('employeeStore', () => {

    const cleanInput = (input: string) =>
    input
    .trim()
    .replace(/\s+/g, '')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

    const employees = ref<EmployeeType[]>(EmployeeList.employees.map(emp => ({
        name: emp.eName,
        role: emp.eRole,
        location: emp.eLocation,
        stack: emp.eStack,
        description: emp.eDescription,
        picture: emp.ePicture
    })));

    const getEmployeeList = computed(() => employees.value)

    const findEmployee = (index: number) => employees.value[index]

    const deleteEmployee = (name: string) => {

        try {
            const employeeIndex: number = employees.value.findIndex(emp => cleanInput(emp.name) === cleanInput(name))
            console.log("emp.name ->", employeeIndex)
    
            if (employeeIndex !== -1) employees.value.splice(employeeIndex, 1);
            else console.log(`could not find index`);
            

        } catch (error) {
            console.log(`could not find employee, ${error}`)
        }
    }

    
    const addEmployee = (newEmployee: EmployeeType) => {
        employees.value.push(newEmployee);
    }

    const updateEmployee = (newData: EmployeeType) => {
        
        const name = newData.name;

        try {
            const employeeIndex: number = employees.value.findIndex(emp => emp.name === cleanInput(name));
    
            if (employeeIndex !== -1) employees.value[employeeIndex] = newData;
            else console.log(`could not find index`);

        } catch (error) {
            console.log(`could not find employee, ${error}`);
        }
    }


    return {
        getEmployeeList,
        findEmployee,
        deleteEmployee,
        addEmployee,
        updateEmployee,
        cleanInput
    }
})