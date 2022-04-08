import { optionsTrailer } from "./optionsTrailer";

export const subMenus = [
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