
import CustomersForm from './CustomerForm';



interface Props {
    customerId: string
}


export default async function CustomersView({ customerId }: Props) {

    const resp = await fetch(`${process.env.HOST_NAME}/api/customers/${customerId === 'nuevo' ? '' : customerId}`, { cache: 'no-store' })
    if (!resp.ok) {
        throw new Error('Error al cargar datos de clientes')
    }
    const data = await resp.json()






    return (

        <CustomersForm customer={data} />

    )
}



