
import { ProductListGrid } from './ProductListGrid';



export const ProductsList = async () => {


  const resp = await fetch(process.env.HOST_NAME + '/api/products', { cache: 'no-store' })


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

