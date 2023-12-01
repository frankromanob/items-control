
export interface IOrder {
    _id: string;
    orderItems: IOrderItems[];
    customer: string;
    customerName:string;
    customerPhone:string
    customerEmail:string
    status: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IOrderItems{
    id:string;
    product:string;
    productName: string;
    productImage:string;
    productSlug:string
    quantity: number;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}