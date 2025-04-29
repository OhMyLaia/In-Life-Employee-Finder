import type { Ref } from "vue"

export type EmployeeType = {
    eName: string,
    eRole: string,
    eLocation: string,
    eStack: string[],
    eDescription: string
    ePicture: string

}

export type GenericButton = {
    text: string,
    class: string,
    onClickFunction?: () => void
}

export type CardPropsType = EmployeeType & GenericButton