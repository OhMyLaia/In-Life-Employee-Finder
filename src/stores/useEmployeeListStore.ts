import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { roleType, type EmployeeType } from '../types';
import axios from 'axios';
import EmployeeList from "../data/db.json";

const useEmployeeStore = defineStore('employeeStore', () => {

    const employees = ref<EmployeeType[]>([]);

    const fetchEmployees = async () => {

        const url = "http://localhost:3000/employees/";
        try {
            await axios.get(url)
            .then(response => {
            employees.value = response.data});
        console.log(`tried and got employees.value from store = ${employees.value.map(emp => emp.id)}`)

        } catch (error) {
            console.log("Error fetching data: ", error)
        }
    }

    const cleanInput = (input: string) => {
        if (!input) return ""
        else return input
        .trim()
        .replace(/\s+/g, '')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        }

    //     const employees = ref<EmployeeType[]>(EmployeeList.employees.map(emp => ({
    //     name: emp.eName,
    //     role: emp.eRole,
    //     location: emp.eLocation,
    //     stack: emp.eStack,
    //     description: emp.eDescription,
    //     picture: emp.ePicture
    // })));

    const getEmployeeList = computed(() => employees.value)

    const findEmployee = (index: number) => employees.value[index]

    const filterEmployees = (roleParam: roleType) => {
    
        try {
    
            // if (employees.value.length === 0) {
            //     console.error(`could not filter employees, employees.value.length = ${employees.value.length}`);
            //     return
            // }
    
            if (roleParam === roleType.all) {
                console.log(`employees.value.length = ${employees.value.length}`)
                return employees.value;
        
            } else {
                const cleanRole = cleanInput(roleParam)
                console.log(`cleanRole = ${cleanRole}`)
                return employees.value.filter(employee => (
                    cleanInput(employee.role)
                    .includes(cleanRole)
                ))
            }
        } catch (error) {
            throw new Error (`could not find any match to filter employees, ${error}`)
        }
    
    }

    // const deleteEmployee = (id: string) => {

    //     try {
    //         const employeeIndex: number = employees.value.findIndex(emp => {
    //             console.log(`cleaned database name -> ${emp.id} === ${id}`)
    //             return String(emp.id) === String(id)
    //         })
    
    //         if (employeeIndex !== -1) employees.value.splice(employeeIndex, 1);
    //         else console.log(`could not find index`);

    //     } catch (error) {
    //         console.log(`could not find employee, ${error}`)
    //     }
    // }

    const deleteEmployee = (id: string) => {
        try {
            console.log(`Attempting to delete employee with id: ${id}`);
            const employeeIndex: number = employees.value.findIndex(emp => {
                console.log(`emp.id: ${emp.id}, comparing with id: ${id}`);
                return String(emp.id) === String(id);
            });
    
            if (employeeIndex !== -1) {
                employees.value.splice(employeeIndex, 1);
            } else {
                console.log(`Employee with id ${id} not found.`);
            }
        } catch (error) {
            console.log(`Error deleting employee: ${error}`);
        }
    }

    const addEmployee = (newEmployee: EmployeeType) => {
        // employees.value.push(newEmployee);
        const url = "http://localhost:3000/employees/";
        axios.post(url, newEmployee)
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
        fetchEmployees,
        findEmployee,
        filterEmployees,
        deleteEmployee,
        addEmployee,
        updateEmployee,
        cleanInput
    }
})

export default useEmployeeStore;