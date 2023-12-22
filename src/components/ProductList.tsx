
import { ProductListGrid } from './ProductListGrid';
import { cookies } from 'next/headers'



export const ProductsList = async () => {
  const cookieStore = cookies()
  const cookietoken = cookieStore.get('items-control-token')
  const resp = await fetch(process.env.HOST_NAME + '/api/products',
    {
      cache: 'no-store',
      headers: {
        Cookie: `items-control-token=${cookietoken.value}`
      }
    }
  )


  if (!resp.ok) {
    throw new Error('Error al cargar datos de productos')
  }

  const data = await resp.json()

  return (
    <>
      <ProductListGrid products={data} />
    </>
  )
}

export default ProductsList

