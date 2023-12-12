
import { IEntry } from '@/interfaces';
import EntriesForm from './EntriesForm';
import myApi from '@/app/lib/myApi';



interface Props {
    entryId: string
}


export default async function EntriesView({ entryId }: Props) {

    let entry: IEntry | null

    const { data, statusText, } = await myApi<IEntry>(`/entries/${entryId==='nuevo'?'':entryId}`)

    if (entryId !== 'nuevo') {
        if (!data && statusText!=='OK') return <>{statusText}</>
        entry = data
    } else {
        entry = {
            _id: '',
            product: '',
            productImage: '',
            productName: '',
            productSlug: '',
            status: 'En proceso',
            quantity: 0,
            createdAt: '',
            updatedAt: ''

        }
    }

    return (
        <EntriesForm entry={entry} />
    )
}



