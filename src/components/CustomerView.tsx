'use client'
import { useState } from 'react'
import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material'
import useSWR from 'swr'
import { ICustomer } from '@/interfaces';
import { validations } from '@/utils';
import { useRouter } from 'next/navigation';


interface formData {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}

// const onFetchCustomer = (customerId: string) => {
//     const { data, error, isLoading } = useSWR<ICustomer>(`/api/customers/${customerId}`)
//     return ({ data, error })
// }



interface Props {
    customerId: string
}


export default function CustomersView({ customerId }: Props) {
    const [isSaving, setIsSaving] = useState(false)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } =
        useForm<ICustomer>({
            defaultValues: {}
        })
    const { data, error, isLoading } = useSWR<ICustomer>(`/api/customers/${customerId}`)    
    if (customerId !== 'nuevo') {
    //    const { data, error } = onFetchCustomer(customerId)
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

   

    const onSubmit = async (form: formData) => {

        setIsSaving(true)


        try {
            const respuesta = await fetch('/api/customers', {
                method: form._id ? 'PUT' : 'POST',
                body: JSON.stringify(form)
            })
            setIsSaving(false)
            alert('Cliente guardado correctamente.')
            router.push('/clientes')
        } catch (error) {
            setIsSaving(false)
            alert('Ha ocurrido un error. ' + error)
            console.log(error)
        }

    }


    const onDelete = async (customerId: string) => {
        try {
            const respuesta = await fetch('/api/customers', {
                method: 'DELETE',
                body: JSON.stringify(customerId)
            })

            if (respuesta.statusText === 'OK') {
                alert('Cliente eliminado correctamente')
            }

            router.push('/clientes')
        } catch (error) {
            setIsSaving(false)
            console.log(error)
        }
    }

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', }}>

            <form name='customerForm' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={10}>
                        <TextField
                            label="Nombre"
                            variant='outlined'
                            fullWidth
                            id='fistName'
                            name='firstName'
                            autoComplete='false'
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
                            autoComplete='false'
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
                            autoComplete='false'
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
                            autoComplete='false'
                            id='phone'
                            name='phone'
                            fullWidth
                            sx={{ mb: 1 }}
                            {...register('phone')}
                            error={!!errors.phone}
                        //helperText={errors.phone?.message}
                        />

                        <Divider sx={{ my: 1 }} />
                        <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{ mb: 1 }}>
                            <Button
                                color="error"
                                startIcon={<DeleteOutline />}
                                sx={{ width: '100px', height: '30px', marginInlineEnd: '20px' }}
                                type="button"
                                onClick={() => onDelete(getValues('_id'))}
                            >
                                Eliminar
                            </Button>
                            <Button
                                color="secondary"
                                startIcon={<SaveOutlined />}
                                sx={{ width: '150px', height: '30px' }}
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



