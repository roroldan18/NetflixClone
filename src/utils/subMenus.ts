import { OptionsTrailer, optionsTrailer } from "./optionsTrailer";

export interface SubMenu{
    order:number,
    title:string,
    movies: OptionsTrailer[]
}

export const subMenus:SubMenu[] = [
    {
        order: 1,
        title: 'Lanzamientos del último año',
        movies: [...optionsTrailer],
    },
    {
        order: 2,
        title: 'Tendencias',
        movies: [...optionsTrailer],
    },
]