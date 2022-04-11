export interface User {
    id: number,
    srcImg: string,
    name: string,
}

export const users:User[] = [
    {
        id: 1,
        srcImg: '/assets/img/profilePicture/iconUser1.png',
        name: 'Martin',
    },
    {
        id: 2,
        srcImg: '/assets/img/profilePicture/iconUser2.png',
        name: 'Juan Carlos',
    },
]