
import EntriesListGrid from './EntriesListGrid';



export const EntriesList = async() => {

  const resp = await fetch(process.env.HOST_NAME + '/api/entries',{cache:'no-store'})

  if (!resp.ok) {
    throw new Error('Error al cargar datos de entradas')
  }
  const data = await resp.json()

  return (
    <EntriesListGrid entries={data}/>
  )
}

export default EntriesList

