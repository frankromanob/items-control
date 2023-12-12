
import { IProduct } from '@/interfaces';
import ProductForm from "@/components/ProductForm";
import myApi from '@/app/lib/myApi';


interface Props {
    slug: string
}

export default async function ProductView({ slug }: Props) {
    const { data, statusText } = await myApi<IProduct>(`/products/${slug === 'nuevo' ? '' : slug}`)

    let product: IProduct | null
    if (slug !== 'nuevo') {
        if (!data && statusText!=='OK') return <>{statusText}</>
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



