
import { ICustomer } from '@/interfaces';
import myApi from '@/app/lib/myApi';
import CustomersForm from './CustomerForm';



interface Props {
    customerId: string
}


export default async function CustomersView({ customerId }: Props) {

    const { data, statusText } = await myApi<ICustomer>(`/customers/${customerId === 'nuevo' ? '' : customerId}`)
    // if (customerId !== 'nuevo') {

        if (!data && statusText!=='OK') return <>{statusText}</>

    //     if (!data) {
    //         return (<Typography margin='20px' display='flex' justifyContent='center' variant='h1' color='primary'>...Cliente no existe</Typography>)
    //     } else {

    //         setValue('_id', data._id!)
    //         setValue('firstName', data.firstName)
    //         setValue('lastName', data.lastName)
    //         setValue('email', data.email)
    //         setValue('phone', data.phone)


    //     }
    // }





    return (

       <CustomersForm customer={data}/>

    )
}



