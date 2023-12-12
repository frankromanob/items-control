'use client'
import { validations } from '@/utils';
import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import myApi from '../lib/myApi';
import Cookies from 'js-cookie';


export default function LoginPage() {
    const router = useRouter()

    type FormData = {
        email: string
        password: string
    }

    const [showError, setShowError] = useState(false)



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()


    const onLogin = async ({ email, password }: FormData) => {
        setShowError(false)

        try {
            const { data } = await myApi.post('/users', { email, password })
            Cookies.set('items-control-token', data.token)
            Cookies.set('items-control-user', data.user.name)
            router.replace('/')
        } catch (error) {
            console.log('error de clave')
            setShowError(true)
            setTimeout(() => setShowError(false), 2000)
        }
    }

    return (
        <form onSubmit={handleSubmit(onLogin)} noValidate>
            <Box sx={{ width: 350, padding: '10px 20px', }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Typography variant='h2' color='secondary' component='h2'>Iniciar sesión</Typography>
                        {showError && <Chip
                            label="Usuario/Clave desconocido"
                            color='warning'
                            icon={<ErrorOutline />}
                            className='fadeIn'
                            style={{ display: 'flex' }} />
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type='email' label='Correo' variant='filled' fullWidth autoComplete='true'
                            {...register('email', {
                                required: 'El correo es requerido',
                                validate: (val) => validations.isEmail(val)
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Contraseña' variant='filled' type='password' fullWidth autoComplete='true'
                            {...register('password', {
                                required: 'Debe especificar una contraseña',
                                minLength: { value: 6, message: 'Minimo de 6 caracteres' }
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' color='secondary' className='circular-btn' size='medium' fullWidth>
                            Ingresar
                        </Button>
                        {/* <Button color='secondary' size='small' fullWidth
                                onClick={() => { signIn() }}
                            >
                                OAUTH
                            </Button> */}
                    </Grid>
                    {/* <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href={router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register'} passHref legacyBehavior>
                                <Link underline='always'>
                                    No tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid> */}

                    {/* <Grid item xs={12} display='flex' flexDirection='column' justifyContent='end'>
                            <Divider sx={{ width: '100%', mb: 2 }} />
                            {
                                Object.values(providers).map((provider: any) => {
                                    if(provider.id==='credentials') return(<div key='credentials'></div>)
                                    return (
                                        <Button
                                            key={provider.id}
                                            variant='outlined'
                                            fullWidth
                                            color='primary'
                                            sx={{ mb: 1 }}
                                            onClick={() => signIn(provider.id)}
                                        >
                                            {provider.name}
                                        </Button>
                                    )
                                })
                            }
                        </Grid> */}
                </Grid>
            </Box>
        </form>

    )
}

