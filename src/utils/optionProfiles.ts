
export interface OptionProfile {
    id: number,
    iconClass: string,
    text: string,
}

 

export const options:OptionProfile[] = [
    {
    id: 1,
    iconClass: 'fa-solid fa-pen',
    text: 'Administrar perfiles',
    },
    {
    id: 2,
    iconClass: 'fa-regular fa-user',
    text: 'Cuenta',
    },
    {
    id: 3,
    iconClass: 'fa-solid fa-circle-question',
    text: 'Centro de ayuda',
    },
]