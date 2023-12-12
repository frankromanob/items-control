
import { IEntry } from '@/interfaces';
import myApi from '@/app/lib/myApi';
import EntriesListGrid from './EntriesListGrid';



export const EntriesList = async() => {

  const { data, statusText,  } = await myApi<IEntry[]>('/entries')

  if (!data && statusText!=='OK') return <> {statusText}</>



  return (
    <EntriesListGrid entries={data}/>
  )
}

export default EntriesList

