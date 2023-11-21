'use client'
import { FormEvent, useState } from 'react'
import { SaveOutlined } from '@mui/icons-material';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material'
import useSWR from 'swr'
import { ICustomer } from '@/interfaces';
import { validations } from '@/utils';
import { useRouter } from 'next/navigation';
import myApi from '@/app/lib/myApi';


interface formData {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}

const onFetchCustomer = (customerId: string) => {
    const { data, error, isLoading } = useSWR<ICustomer>(`/api/customers/${customerId}`)
    return ({ data, error })
}



interface Props {
    customerId: string
}


export default function CustomersView({ customerId }: Props) {
    const [isSaving, setIsSaving] = useState(false)

    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } =
        useForm<ICustomer>({
            defaultValues: {}
        })
    if (customerId !== 'nuevo') {
        const { data, error } = onFetchCustomer(customerId)
        if (!data && !error) return <>{error}</>

        if (!data) {
            return (<Typography margin='20px' display='flex' justifyContent='center' variant='h1' color='primary'>...Cliente no existe</Typography>)
        } else {

            setValue('_id', data._id!)
            setValue('firstName', data.firstName)
            setValue('lastName', data.lastName)
            setValue('email', data.email)
            setValue('phone', data.phone)


        }
    }

    const router=useRouter()

    const onSubmit = async (form: formData) => {

        setIsSaving(true)
        console.log(form)
        
        try {
            const respuesta = await fetch('/api/customers',{
                method: form._id ? 'PUT' : 'POST',
                body: JSON.stringify(form)
            })
            // const respuesta = await myApi({
            //     url: '/customers',
            //     method: form._id ? 'PUT' : 'POST',
            //     data: {firstName:form.firstName,}
            // })
            //console.log(respuesta)

            if(respuesta.statusText==='OK'){
                router.push('/clientes')
            }

            setIsSaving(false)


        } catch (error) {
            setIsSaving(false)
            console.log(error)
        }

    }


    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', }}>

            <form name='customerForm' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} m={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Nombre"
                            variant='outlined'
                            fullWidth
                            //value={customer.firstName}
                            id='fistName'
                            name='firstName'
                            autoComplete='true'
                            sx={{ mb: 1 }}
                            {...register('firstName', {
                                required: 'Este campo es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                            error={!!errors.firstName}
                        //helperText={errors.firstName?.message}
                        />

                        <TextField
                            label="Apellido"
                            variant="outlined"
                            fullWidth
                            autoComplete='true'
                            //value={customer.lastName}
                            id='lastName'
                            name='lastName'
                            sx={{ mb: 1 }}
                            {...register('lastName', {
                                required: 'Este campo es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                            error={!!errors.lastName}
                        //helperText={errors.lastName?.message}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            autoComplete='true'
                            //value={customer.email}
                            id='email'
                            name='email'
                            sx={{ mb: 1 }}
                            {...register('email', {
                                required: 'Este campo es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                                validate: (val) => validations.isEmail(val)
                            })}
                            error={!!errors.email}
                        //helperText={errors.email?.message}
                        />
                        <TextField
                            label="Telefono"
                            variant="outlined"
                            autoComplete='true'
                            //value={customer.phone}
                            id='phone'
                            name='phone'
                            fullWidth
                            sx={{ mb: 1 }}
                            {...register('phone')}
                            error={!!errors.phone}
                        //helperText={errors.phone?.message}
                        />

                        <Divider sx={{ my: 1 }} />
                        <Box display='flex' justifyContent='flex-end' sx={{ mb: 1 }}>
                            <Button
                                color="secondary"
                                startIcon={<SaveOutlined />}
                                sx={{ width: '150px' }}
                                type="submit"
                                disabled={isSaving}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box >

    )
}



