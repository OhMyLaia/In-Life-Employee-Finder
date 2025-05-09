export type EmployeeType = {
    name: string,
    role: string,
    location: string,
    stack: string[],
    description: string
    picture: string

}

export type GenericButtonProps = {
    text: string,
    class: string,
    onClick: () => void,
    toggleBtn?: () => void
}

export type CardPropsType = EmployeeType & GenericButtonProps

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

export enum SignStatus {
    success = 'success',
    failure = 'failure',
    pending = 'pending'
}

export enum AuthError {
    invalidEmail = 'invalid_email',
    invalidPassword = 'invalid_password',
    userNotFound = 'userNotFound',
    unknown = 'unknown'
}

export type infoSpanProps = {
    text: string,
    customClass: string
}