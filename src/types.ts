export type EmployeeType = {
    name: string,
    role: string,
    location: string,
    stack: string[],
    description: string
    picture: string

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