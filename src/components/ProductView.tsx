'use client'
import useSWR from 'swr'
import { IProduct } from '@/interfaces';
import ProductForm from "@/components/ProductForm";




interface Props {
    slug: string
}

export default function ProductView({ slug }: Props) {
    const { data, error, isLoading } = useSWR<IProduct>(`/api/products/${slug}`)
    let product: IProduct | null
    if (slug !== 'nuevo') {
       // const { data, error } = onFetchProduct(slug)
        if (!data && !error) return <>{error}</>
        product = data
    } else {
        product = {
            _id: '',
            description: '',
            images: ['img1.jpg', 'img2.jpg'],
            inStock: 0,
            pv: 0,
            bv: 0,
            ibo: 0,
            costo: 0,
            sizes: '',
            slug: '',
            tags: ['tag1', 'tag2'],
            title: '',
            type: '',
            createdAt: '',
            updatedAt: ''
        }
    }

    return (

        <ProductForm producto={product} />

    )
}



