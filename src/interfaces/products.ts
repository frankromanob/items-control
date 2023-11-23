export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    pv: number;
    bv: number;
    ibo: number;
    costo: number;
    sizes: string;
    slug: string;
    tags: string[];
    title: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

// export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
// export type IType = 'shirts'|'pants'|'hoodies'|'hats';