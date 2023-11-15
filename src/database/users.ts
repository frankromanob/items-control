import bcrypt from 'bcryptjs'

interface SeedUser {
    name: string;
    email: string;
    password: string;
    role: string;
}

interface SeedData {
    users: SeedUser[],
}


export const initialDataUsers: SeedData = {
    users: [
        {
            name: "Francisco Romano",
            email: "fromano@google.com",
            password: bcrypt.hashSync("123456"),
            role: "admin",
        },
        {
            name: "Betilio Romano",
            email: "bromano@google.com",
            password: bcrypt.hashSync("654321"),
            role: "client",
        },
    ]
}