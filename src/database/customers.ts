
interface SeedCustomer {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

interface SeedData {
    customers: SeedCustomer[],
}


export const initialDataCustomers: SeedData = {
    customers: [
        {
            firstName: "Paula",
            lastName: "Romano",
            email: "promano@google.com",
            phone: "8099916858",
        },
        {
            firstName: "Brunilda",
            lastName: "Batista",
            email: "bbatista@google.com",
            phone: "8099649356",
        },

    ]
}