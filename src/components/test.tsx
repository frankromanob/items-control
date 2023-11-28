import { IProduct } from '@/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export const test = () => {
    const [productList, setProductList] = useState<IProduct | []>([])

    useEffect(() => {

        fetchProducts()

    }, [])

    async function fetchProducts() {
        const res = await fetch('/api/products')

        const data = await res.json()
        setProductList(data)

    }



    return (
        <div>hola</div>
    )
}
