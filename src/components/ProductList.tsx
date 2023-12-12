
import { IProduct } from '@/interfaces';
import myApi from '@/app/lib/myApi';
import { ProductListGrid } from './ProductListGrid';



export const ProductsList = async () => {


  const { data, statusText } = await myApi<IProduct[]>('/products')


  if (!data && statusText !== 'OK') return <>{statusText}</>

  return (
    <>
      <ProductListGrid products={data} />
    </>
  )
}

export default ProductsList

