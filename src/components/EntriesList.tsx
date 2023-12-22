
import { cookies } from 'next/headers';
import EntriesListGrid from './EntriesListGrid';



export const EntriesList = async () => {

  const cookieStore = cookies()
  const cookietoken = cookieStore.get('items-control-token')

  const resp = await fetch(process.env.HOST_NAME + '/api/entries',
    {
      cache: 'no-store',
      headers: {
        Cookie: `items-control-token=${cookietoken.value}`
      }
    })

  if (!resp.ok) {
    throw new Error('Error al cargar datos de entradas')
  }
  const data = await resp.json()

  return (
    <EntriesListGrid entries={data} />
  )
}

export default EntriesList

