'use client'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Card, CardActions, CardMedia, Chip, Divider, FormLabel, Grid, TextField, capitalize } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material'
import { IProduct } from '@/interfaces';
import { useRouter } from 'next/navigation';
import myApi from '@/app/lib/myApi';


interface formData {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    pv: number;
    bv: number;
    ibo: number;
    costo: number;
    sizes: string;
    slug: string;
    tags: string[];
    title: string;
    type: string;
}


interface Props {
    producto: IProduct
}


export default function ProductForm({ producto }: Props) {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } =
        useForm<IProduct>({
            defaultValues: producto
        })

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isSaving, setIsSaving] = useState(false)
    const [newTag, setNewTag] = useState('')

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'title') {
                const newSlug = value.title?.trim().replaceAll(' ', '_').replaceAll("'", '').toLocaleLowerCase() || ''
                setValue('slug', newSlug as string, { shouldValidate: true })
            }
        })

        return () => subscription.unsubscribe()
    }, [watch, setValue])




    // Imagenes


    const onDeleteImage = async (image: string) => {
        const images = getValues('images')
        setValue('images', images.filter(img => img !== image), { shouldValidate: true })
    }
    const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0) {
            return
        }

        try {
            for (const file of target.files) {
                const formData = new FormData
                formData.append('file', file)
                const { data } = await myApi.post<{ secure_url: string }>('/uploads', formData)
                setValue('images', [...getValues('images'), data.secure_url], { shouldValidate: true })

            }
        } catch (error) {
            console.log(error)
        }

    }
    //

    //Tags
    const onDeleteTag = (tag: string) => {
        const currentTags = getValues('tags')
        if (currentTags.includes(tag as any)) {
            return setValue('tags', currentTags.filter(s => s !== tag), { shouldValidate: true })
        }
    }

    const onNewTag = (tag: string) => {
        setNewTag('')
        const currentTags = getValues('tags')
        if (currentTags.includes(tag.trim().toLowerCase())) { return }
        setValue('tags', [...currentTags as any, tag.trim().toLowerCase()])
    }
    //

    const onSubmit = async (form: formData) => {
        if (form.images.length < 1) { return alert('Se requiere al menos 1 imagen') }
        setIsSaving(true)


        try {
            const respuesta = await fetch('/api/products', {
                method: form._id ? 'PUT' : 'POST',
                body: JSON.stringify(form)
            })
            router.refresh()
            alert('Cambios guardados correctamente')

            setIsSaving(false)
        } catch (error) {
            setIsSaving(false)
            alert('Ha ocurrido un error. ' + error)
            console.log(error)
        }

    }


    const onDelete = async (productId: string, images: string[]) => {
        try {
            const respuesta = await fetch('/api/products', {
                method: 'DELETE',
                body: JSON.stringify(productId, images)
            })

            if (respuesta.statusText === 'OK') {
                router.push('/')
                alert('Producto eliminado correctamente')
            }

        } catch (error) {
            setIsSaving(false)
            console.log(error)
        }
    }



    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', }}>

            <form name='productForm' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6} >
                        <Box display='flex' flexDirection="column">
                            <FormLabel sx={{ mb: 1 }}>Imágenes: </FormLabel>
                            <Grid container spacing={2}>
                                {
                                    getValues('images').map(img => (
                                        <Grid item xs={6} sm={3} key={img}>
                                            <Card>
                                                <CardMedia
                                                    component='img'
                                                    className='fadeIn'
                                                    width='200'
                                                    height='100%'
                                                    image={`${img}`}
                                                    alt={img}
                                                />
                                                <CardActions>
                                                    <Button fullWidth color="error" style={{ height: '20px', marginTop: '10px' }}
                                                        onClick={() => onDeleteImage(img)}
                                                    >
                                                        Borrar
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            {/* <TextField
                                //label="Images"
                                variant='outlined'
                                fullWidth
                                id='images'
                                name='images'
                                multiline
                                sx={{ mb: 1 }}
                                {...register('images', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                })}
                                error={!!errors.images}
                                helperText={errors.images?.message}
                            /> */}
                            <Button
                                color="secondary"
                                fullWidth
                                startIcon={<UploadOutlined />}
                                sx={{ mb: 3, mt: 1 }}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Cargar imagen
                            </Button>

                            <Chip
                                label="Es necesario al menos 1 imagen"
                                color='error'
                                variant='outlined'
                                sx={{ mb: 1, display: getValues('images').length < 1 ? 'flex' : 'none', }}
                            />
                            <input
                                ref={fileInputRef}
                                type='file'
                                multiple
                                accept='image/png, image/gif, image/jpeg, image/webp'
                                style={{ display: 'none' }}
                                onChange={onFilesSelected}
                            />

                        </Box>


                        <Box display='flex' flexDirection='row'>
                            <Box display='block' flexDirection='column' marginInlineEnd='5px'>
                                <TextField
                                    label="Nombre"
                                    variant='outlined'
                                    fullWidth
                                    //value={customer.firstName}
                                    id='title'
                                    name='title'
                                    autoComplete='false'
                                    sx={{ mb: 1 }}
                                    {...register('title', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                    })}
                                    error={!!errors.title}
                                //helperText={errors.firstName?.message}
                                />
                                <TextField
                                    label="Slug"
                                    variant='outlined'
                                    fullWidth
                                    value={getValues('slug')}
                                    id='slug'
                                    name='slug'
                                    autoComplete='false'
                                    sx={{ mb: 1 }}
                                    {...register('slug', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                                        validate: (val) => val.trim().includes(' ') ? 'No puede tener espacios en blanco' : undefined
                                    })}
                                    error={!!errors.slug}
                                    helperText={errors.slug?.message}
                                />

                                <TextField
                                    label="PV"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete='false'
                                    id='pv'
                                    name='pv'
                                    sx={{ mb: 1 }}
                                    {...register('pv', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 0, message: 'Mínimo de valor cero' }
                                    })}
                                    error={!!errors.pv}
                                //helperText={errors.lastName?.message}
                                />
                                <TextField
                                    label="BV"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete='false'
                                    id='bv'
                                    name='bv'
                                    sx={{ mb: 1 }}
                                    {...register('bv', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 0, message: 'Mínimo de valor cero' }
                                    })}
                                    error={!!errors.bv}
                                //helperText={errors.lastName?.message}
                                />
                                <TextField
                                    label="IBO"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete='false'
                                    id='ibo'
                                    name='ibo'
                                    sx={{ mb: 1 }}
                                    {...register('ibo', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 0, message: 'Mínimo de valor cero' }
                                    })}
                                    error={!!errors.ibo}
                                //helperText={errors.lastName?.message}
                                />
                            </Box>
                            <Box display='block' flexDirection='column'>

                                <TextField
                                    label="Existencia"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete='false'
                                    id='instock'
                                    name='instock'
                                    sx={{ mb: 1 }}
                                    {...register('inStock', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 0, message: 'Mínimo de valor cero' }
                                    })}
                                    error={!!errors.inStock}
                                //helperText={errors.email?.message}
                                />
                                <TextField
                                    label="Tipo"
                                    variant="outlined"
                                    autoComplete='false'
                                    id='type'
                                    name='type'
                                    fullWidth
                                    sx={{ mb: 1 }}
                                    {...register('type')}
                                    error={!!errors.type}
                                //helperText={errors.phone?.message}
                                />
                                <TextField
                                    label="Tamaño"
                                    variant="outlined"
                                    autoComplete='false'
                                    id='sizes'
                                    name='sizes'
                                    fullWidth
                                    sx={{ mb: 1 }}
                                    {...register('sizes')}
                                    error={!!errors.sizes}
                                //helperText={errors.phone?.message}
                                />
                                {/* <TextField
                                    label="Tags"
                                    variant="outlined"
                                    autoComplete='false'
                                    //value={customer.phone}
                                    id='tags'
                                    name='tags'
                                    fullWidth
                                    sx={{ mb: 1 }}
                                    {...register('tags')}
                                    error={!!errors.tags}
                                //helperText={errors.phone?.message}
                                /> */}
                                <TextField
                                    label="Costo"
                                    variant="outlined"
                                    autoComplete='false'
                                    id='costo'
                                    name='costo'
                                    fullWidth
                                    sx={{ mb: 1 }}
                                    {...register('costo')}
                                    error={!!errors.costo}
                                //helperText={errors.phone?.message}
                                />


                            </Box>
                        </Box>
                        <TextField
                            label="Etiquetas"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 1 }}
                            value={newTag}
                            helperText="Presiona [spacebar] para agregar"
                            onChange={(event) => { setNewTag(event.target.value) }}
                            onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    onNewTag(newTag)
                                }
                            }}
                        />

                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                        }}
                            component="ul">
                            {
                                getValues('tags').map((tag) => {

                                    return (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            onDelete={() => onDeleteTag(tag)}
                                            color="primary"
                                            size='small'
                                            sx={{ ml: 1, mt: 1 }}
                                        />
                                    );
                                })}
                        </Box>
                        <TextField
                            label="Descripcion"
                            variant="outlined"
                            autoComplete='false'
                            //value={customer.phone}
                            id='description'
                            name='description'
                            multiline
                            fullWidth
                            sx={{ mb: 1, mt: 2 }}
                            {...register('description')}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />
                        <Divider sx={{ my: 1 }} />
                        <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{ mb: 1 }}>
                            <Button
                                color="error"
                                startIcon={<DeleteOutline />}
                                sx={{ width: '100px', height: '30px', marginInlineEnd: '20px' }}
                                type="button"
                                onClick={() => onDelete(getValues('_id'), getValues('images'))}
                            >
                                Eliminar
                            </Button>
                            {/* <Button
                                color="primary"
                                startIcon={<DeleteOutline />}
                                sx={{ width: '100px', height: '30px', marginInlineEnd: '20px' }}
                                type="button"
                                onClick={
                                    () => {
                                        console.log(getValues('images'));
                                        console.log(getValues('tags'))
                                    }

                                }
                            >
                                images
                            </Button> */}
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



