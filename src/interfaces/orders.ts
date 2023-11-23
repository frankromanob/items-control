import { ICustomer, IProduct } from ".";

export interface IOrder {
    _id: string;
    products: IOrderItems;
    customer: ICustomer;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IOrderItems{
    _id:string;
    product:IProduct;
    cantidad: number;
    status: string;
}