
import { IEntry } from '@/interfaces';
import EntriesForm from './EntriesForm';
import { cookies } from 'next/headers';




interface Props {
    entryId: string
}


export default async function EntriesView({ entryId }: Props) {

    let entry: IEntry | null
    const cookieStore = cookies()
    const cookietoken = cookieStore.get('items-control-token')

    const resp = await fetch(`${process.env.HOST_NAME}/api/entries/${entryId === 'nuevo' ? '' : entryId}`,
        {
            cache: 'no-store',
            headers: {
                Cookie: `items-control-token=${cookietoken.value}`
            }
        })
    if (!resp.ok) {
        throw new Error('Error al cargar datos de entradas')
    }

    if (entryId !== 'nuevo') {

        entry = await resp.json()
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



