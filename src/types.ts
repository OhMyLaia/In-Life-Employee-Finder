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

export enum roleType {
    all = "all",
    senior = "senior",
    mid = "mid",
    junior = "junior",
    fullstack = "fullstack",
    frontend = "frontend",
    backend = "backend",
    designer = "designer",
    manager = "manager"
}

export type CardsContainerPropsType = {
    filterByRole?: roleType;
}