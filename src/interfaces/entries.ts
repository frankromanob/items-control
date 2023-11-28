export interface IEntry {
    _id: string;
    product: string;
    productName:string;
    productImage:string;
    productSlug:string;
    quantity: number;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}
