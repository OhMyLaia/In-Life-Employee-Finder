import { Ref } from "vue"

export type CardType = {
    eName: string,
    eRole: string,
    eLocation: string,
    eStack: [],
    eDescription: string
    ePicture: string
    isToggled: Ref<boolean, boolean>
}

export type GenericButton = {
    text: string,
    class: string,
    onClick: () => void,
    toggleBtn?: () => void
}

export type CardPropsType = CardType & GenericButton