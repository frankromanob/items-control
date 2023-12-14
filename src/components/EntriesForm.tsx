'use client'
import { useEffect, useState } from 'react'
import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { Card, CardMedia, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material'
import { IEntry, IProduct } from '@/interfaces';
import { useRouter } from 'next/navigation';



interface formData {
    _id: string;
    product: string;
    productName: string;
    productSlug: string;
    productImage: string;
    quantity: number;
    status: string;
}


interface Props {
    entry: IEntry
}



export default function EntriesForm({ entry }: Props) {
    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } =
        useForm<IEntry>({
            defaultValues: entry
        })

    const [productList, setProductList] = useState<IProduct[] | undefined>
        (undefined)
    const [isSaving, setIsSaving] = useState(false)
    const [productsLoaded, setProductsLoaded] = useState(false)

    const router = useRouter()

    ////Product lists
    useEffect(() => {


        const buscaProds = async () => {
            const resp = await fetch('/api/products')
            const data= await resp.json()
            setProductList(data)
        }
        buscaProds()

    }, [])

    useEffect(() => {
        if (productList) {
            setProductsLoaded(true)
        }
    }, [productList])

    //////



    const onSubmit = async (form: formData) => {

        setIsSaving(true)
        try {

            //console.log(form)
            const respuesta = await fetch('/api/entries',{
                method: form._id ? 'PUT' : 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': `multipart/form-data; `
                }
            })

            setIsSaving(false)

            if (!respuesta.ok) { throw new Error(respuesta.statusText) }
            alert('Entrada guardada correctamente.')
            router.replace('/entradas')
            router.refresh()
        } catch (error) {
            setIsSaving(false)
            alert('Ha ocurrido un error. ' + error)
            console.log(error)
        }

    }


    const onDelete = async (entryId: string) => {
        try {
            const respuesta = await fetch('/api/entries', {
                method: 'DELETE',
                body: JSON.stringify(entryId)
            })

            if (!respuesta.ok) {
                { throw new Error(respuesta.statusText) }
            }
            alert('Entrada eliminada correctamente. Nota: esto no rebaja la existencia')

            router.replace('/entradas')
            router.refresh()
        } catch (error) {
            setIsSaving(false)
            console.log(error)
        }
    }



    const onSelectProduct = (product: string) => {

        const prodToSet = productList.filter((prod) => (prod._id == product))

        // setValue('product', prodToSet[0]._id, { shouldValidate: true })
        setValue('productName', prodToSet[0].title, { shouldValidate: true })
        setValue('productSlug', prodToSet[0].slug, { shouldValidate: true })
        setValue('productImage', prodToSet[0].images[0], { shouldValidate: true })

    }

    return (
        !productsLoaded ? <Typography marginInlineStart='5px' fontWeight='bold' color='secondary'>Cargando productos...</Typography>
            : <Box sx={{ display: 'flex', flexDirection: 'column', m: 1 }}>

                <form name='entryForm' onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12} >
                            <Grid item xs={6} sm={3} mb={2} key={getValues('product')}>
                                <Card sx={{ width: '110px' }}>
                                    <CardMedia
                                        component='img'
                                        className='fadeIn'
                                        width='200'
                                        height='100%'
                                        image={`${getValues('productImage')}`}
                                        alt={getValues('productName')}
                                    />
                                </Card>
                            </Grid>
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: '50', height: '30', mb: 1 }}>
                                <TextField
                                    select
                                    fullWidth
                                    id="Producto"
                                    disabled={getValues('status') == 'Completada'}
                                    defaultValue={entry.product}
                                    label="Producto"
                                    // SelectProps={{
                                    //     renderValue: (product:IProduct) => entry.product
                                    // }}
                                    {...register("product", {
                                        required: 'Este campo es requerido',
                                    })}
                                    error={!!errors.product}
                                    helperText={errors.product?.message}
                                    onChange={(event) => onSelectProduct(event.target.value)}
                                >
                                    {productList.map((product) => (
                                        <MenuItem key={product._id} value={product._id} sx={{ display: 'flex', flexDirection: 'row' }} >
                                            <Box sx={{ width: '20px', mr: 1 }}>
                                                <CardMedia
                                                    component='img'
                                                    //width='10px'
                                                    //height='20px'
                                                    image={product.images[0]}
                                                    alt={product.title}

                                                />
                                            </Box>
                                            {product.title}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>


                            <TextField
                                label="Cantidad"
                                variant="outlined"
                                fullWidth
                                type='number'
                                disabled={getValues('status') == 'Completada'}
                                autoComplete='false'
                                id='quantity'
                                name='quantity'
                                sx={{ mb: 1 }}
                                {...register('quantity', {
                                    required: 'Este campo es requerido',
                                    validate: (val) => val < 1 ? 'No puede ser menor a 1' : undefined
                                })}
                                error={!!errors.quantity}
                                helperText={errors.quantity?.message}
                            />
                            <TextField
                                label="Estado"
                                variant="outlined"
                                fullWidth
                                autoComplete='false'
                                id='status'
                                name='status'
                                value={getValues('status')}
                                sx={{ mb: 1 }}
                                {...register('status', {})}
                                error={!!errors.status}
                            //helperText={errors.email?.message}
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
                                    disabled={isSaving || getValues('status') == 'Completada'}
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



