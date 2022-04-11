
export interface ButtonOption {
    id: number,
    svg: string,
    text: string,
    classN: string,
}

export const buttonsOptions:ButtonOption[] = [
    {
        id: 1,
        svg: 'https://www.svgrepo.com/show/95124/play-button.svg',
        text: 'Reproducir',
        classN: 'light',
    },
    {
        id: 2,
        svg: 'https://www.svgrepo.com/show/332421/info-circle.svg',
        text: 'Más información',
        classN: 'dark',
    }
]