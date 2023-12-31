
import { IProduct } from '@/interfaces';
import ProductForm from "@/components/ProductForm";
import { cookies } from 'next/headers';


interface Props {
    slug: string
}

export default async function ProductView({ slug }: Props) {
    const cookieStore = cookies()
    const cookietoken = cookieStore.get('items-control-token')
    const resp = await fetch(`${process.env.HOST_NAME}/api/products/${slug === 'nuevo' ? '' : slug}`,
        {
            cache: 'no-store',
            headers: {
                Cookie: `items-control-token=${cookietoken.value}`
            }
        })

    if (!resp.ok) {
        throw new Error('Error al cargar datos de productos')
    }

    let product: IProduct | null
    if (slug !== 'nuevo') {
        product = await resp.json()
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



