'use client'
import useSWR from 'swr'
import { IEntry } from '@/interfaces';
import EntriesForm from './EntriesForm';



interface Props {
    entryId: string
}


export default function EntriesView({ entryId }: Props) {

    const { data, error, } = useSWR<IEntry>(`/api/entries/${entryId}`)
    let entry: IEntry | null

    if (entryId !== 'nuevo') {
        if (!data && !error) return <>{error}</>
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



