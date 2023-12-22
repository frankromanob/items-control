'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import { AddCardOutlined, DeleteOutline, RemoveCircleOutlineOutlined, SaveAltOutlined, SaveOutlined } from '@mui/icons-material';
import { Card, CardMedia, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material'
import { ICustomer, IOrder, IOrderItems, IProduct } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Cookies from 'js-cookie';




interface formData {
    _id: string;
    customer: string,
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    status: string,
    orderItems: IOrderItems[]
}


interface Props {
    order: IOrder
}



export default function EntriesForm({ order }: Props) {
    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } =
        useForm<IOrder>({
            defaultValues: order
        })

    const [productList, setProductList] = useState<IProduct[] | undefined>(undefined)
    const [customerList, setCustomerList] = useState<ICustomer[] | undefined>(undefined)
    const [orderItemsList, setOrderItemsList] = useState<IOrderItems[]>(order.orderItems)

    const [tempProduct, setTempProduct] = useState({ product: '', title: '', quantity: 0 })
    const [isSaving, setIsSaving] = useState(false)
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [customerLoaded, setCustomerLoaded] = useState(false)

    const router = useRouter()
    const columns: GridColDef[] = [
        { field: 'productName', headerName: 'Producto', width: 300, },
        { field: 'quantity', headerName: 'Cantidad', width: 80, },
        {
            field: 'product', headerName: 'Eliminar', width: 100, align: 'center', headerAlign: 'center',
            renderCell: ({ row }) => {
                return (
                    <Button
                        color="error"
                        startIcon={<RemoveCircleOutlineOutlined />}

                        disabled={getValues('status') == 'Completado'}
                        onClick={() => onRemoveItem(row)}
                        sx={{ ml: 1, width: '20px', justifyItems: 'center' }}
                    >
                    </Button>
                )
            }
        },

    ]

    const cookietoken = Cookies.get('items-control-token')
    ////Product list
    useEffect(() => {



        const buscaProds = async () => {
            const resp = await fetch('/api/products',
                {
                    headers: {
                        Cookie: `items-control-token=${cookietoken}`
                    }
                })
            const data = await resp.json()
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

    ////Customer list
    useEffect(() => {



        const buscaCustomers = async () => {
            const resp = await fetch('/api/customers',
                {
                    headers: {
                        Cookie: `items-control-token=${cookietoken}`
                    }
                })
            const data = await resp.json()
            setCustomerList(data)
        }
        buscaCustomers()

    }, [])

    useEffect(() => {
        if (customerList) {
            setCustomerLoaded(true)
        }
    }, [customerList])

    //////



    const onSubmit = async (form: formData) => {
        setIsSaving(true)

        try {
            form.orderItems = orderItemsList
            form.status = 'En proceso'
            const respuesta = await fetch('/api/orders', {
                method: form._id ? 'PUT' : 'POST',
                body: JSON.stringify(form),
                headers: {
                    Cookie: `items-control-token=${cookietoken}`
                }
            })
            setIsSaving(false)
            //console.log(respuesta)
            if (!respuesta.ok) { throw new Error(respuesta.statusText) }
            alert('Pedido guardado correctamente.')
            const data = await respuesta.json()
            router.replace(`/admin/pedidos/${data._id}`)
        } catch (error) {
            setIsSaving(false)
            alert('Ha ocurrido un error. ' + error)
            console.log(error)
        }
    }

    const onProcessOrder = async (form: formData) => {

        setIsSaving(true)

        try {
            form.orderItems = orderItemsList
            form.status = 'Completado'
            const respuesta = await fetch('/api/orders', {
                method: 'PUT',
                body: JSON.stringify(form),
                headers: {
                    Cookie: `items-control-token=${cookietoken}`
                }
            })
            setIsSaving(false)
            if (!respuesta.ok) { throw new Error(respuesta.statusText) }
            alert('Pedido procesado correctamente.')
            router.replace('/pedidos')
            router.refresh()
        } catch (error) {
            setIsSaving(false)
            alert('Ha ocurrido un error. ' + error)
            console.log(error)
        }
    }


    const onDelete = async (orderId: string) => {
        try {
            const respuesta = await fetch('/api/orders', {
                method: 'DELETE',
                body: JSON.stringify(orderId),
                headers: {
                    Cookie: `items-control-token=${cookietoken}`
                }
            })
            //console.log(respuesta)
            if (!respuesta.ok) {
                if (respuesta.statusText !== 'OK') { throw new Error(respuesta.statusText) }
            }

            alert('Pedido eliminado correctamente. Nota: esto no afecta la existencia')
            router.replace('/pedidos')
            router.refresh()
        } catch (error) {
            setIsSaving(false)
            console.log(error)
        }
    }

    const onAddItem = async () => {
        if (tempProduct.product == '' || tempProduct.quantity < 1) {
            alert('Debe especificar el producto y la cantidad correcta')
            return
        }
        const productToSet = productList.filter((prod) => (prod._id == tempProduct.product))
        setOrderItemsList([...orderItemsList, {
            id: productToSet[0]._id + new Date(),
            product: productToSet[0]._id,
            productName: productToSet[0].title,
            productSlug: productToSet[0].slug,
            productImage: productToSet[0].images[0],
            quantity: tempProduct.quantity,
            status: 'En proceso'
        }])

        setTempProduct({ product: '', title: '', quantity: 0 })
    }

    const onChangeTempProduct = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const productToSet = productList.filter((prod) => (prod._id == e.target.value))
        setTempProduct({ ...tempProduct, product: productToSet[0]._id, title: productToSet[0].title })
    }

    const onSelectCustomer = (customer: string) => {

        const customerToSet = customerList.filter((prod) => (prod._id == customer))

        setValue('customer', customerToSet[0]._id, { shouldValidate: true })
        setValue('customerName', customerToSet[0].firstName + ' ' + customerToSet[0].lastName, { shouldValidate: true })
        setValue('customerEmail', customerToSet[0].email, { shouldValidate: true })
        setValue('customerPhone', customerToSet[0].phone, { shouldValidate: true })

    }

    const onRemoveItem = (row) => {
        const orderItemsFiltered = orderItemsList.filter((prod) => (prod.id != row.id))
        setOrderItemsList(orderItemsFiltered)

    }

    const rows = orderItemsList.map((orderItems) => ({
        id: orderItems.id,
        productName: orderItems.productName,
        product: orderItems.product,
        productSlug: orderItems.productSlug,
        quantity: orderItems.quantity,
        status: orderItems.status,
        // date: new Date(orderItems.createdAt).toLocaleDateString(),
    }))

    return (
        !productsLoaded ? <Typography marginInlineStart='5px' fontWeight='bold' color='secondary'>Cargando productos...</Typography>
            : !customerLoaded ? <Typography marginInlineStart='5px' fontWeight='bold' color='secondary'>Cargando clientes...</Typography>
                : <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                    <form name='entryForm' onSubmit={handleSubmit(onSubmit)} >
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} >
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                                        <TextField
                                            select
                                            id="customer"
                                            defaultValue={order.customer}
                                            label="Cliente"
                                            disabled={getValues('status') == 'Completado'}
                                            {...register("customer", {
                                                required: 'Este campo es requerido',
                                            })}
                                            error={!!errors.customer}
                                            helperText="Seleccione el cliente de este pedido"
                                            onChange={(event) => onSelectCustomer(event.target.value)}
                                            sx={{ ml: 1, mb: 2 }}
                                        >
                                            {customerList.map((customer) => (
                                                <MenuItem key={customer._id} value={customer._id} sx={{ display: 'flex', flexDirection: 'row' }} >
                                                    {customer.firstName + ' ' + customer.lastName}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            label="Correo"
                                            variant="outlined"
                                            autoComplete='false'
                                            id='email'
                                            value={getValues('customerEmail')}
                                            name='email'
                                            sx={{ ml: 1, mb: 1 }}
                                            {...register('customerEmail',)}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1, }}>
                                        <TextField
                                            label="Telefono"
                                            variant="outlined"
                                            autoComplete='false'
                                            id='phone'
                                            fullWidth
                                            value={getValues('customerPhone')}
                                            name='phone'
                                            sx={{ mb: 1, ml: 1 }}
                                            {...register('customerPhone',)}
                                        />
                                        <TextField
                                            label="Estado"
                                            variant="outlined"
                                            autoComplete='false'
                                            id='status'
                                            name='status'
                                            value={getValues('status')}
                                            sx={{ mb: 1, ml: 2 }}
                                            {...register('status', {})}
                                            error={!!errors.status}
                                        />
                                    </Box>
                                </Box>

                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    boxShadow: 2,
                                    border: 1,
                                    borderRadius: 2,
                                    borderColor: 'teal',
                                    ml: 1
                                }}>
                                    <Typography sx={{ m: 1 }} color='secondary'>Agregar productos</Typography>
                                    <Card>
                                        {/* <CardMedia
                                            component='img'
                                            className='fadeIn'
                                            width='100px'
                                            height='200px'
                                            image={`${getValues('orderItems.productImage')}`}
                                            alt={getValues('orderItems.productName')}
                                            sx={{ mb: 2 }}
                                        /> */}
                                    </Card>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TextField
                                            select
                                            disabled={getValues('status') == 'Completado'}
                                            id="Producto"
                                            fullWidth
                                            value={tempProduct.product}
                                            name="product"
                                            SelectProps={{
                                                renderValue: (product: IProduct) => tempProduct.title
                                            }}
                                            helperText="Seleccione el producto a agregar"
                                            onChange={(event) => onChangeTempProduct(event)}
                                            sx={{ m: 1 }}
                                        >
                                            {productList.map((product) => (
                                                <MenuItem key={product._id} value={product._id} sx={{ display: 'flex', flexDirection: 'row', flex: 'wrap' }} >
                                                    <Box sx={{ width: '20px', mr: 1 }}>
                                                        <CardMedia
                                                            component='img'
                                                            //width='10px'
                                                            //height='20px'
                                                            image={product.images[0]}
                                                            alt={product.title}

                                                        />
                                                    </Box>
                                                    {product.title} - {product.inStock}
                                                </MenuItem>
                                            ))}
                                        </TextField>


                                        <TextField
                                            label="Cantidad"
                                            variant="outlined"
                                            disabled={getValues('status') == 'Completado'}
                                            type='number'
                                            value={tempProduct.quantity}
                                            onChange={(event) => setTempProduct({ ...tempProduct, quantity: Number(event.target.value) })}
                                            autoComplete='false'
                                            id='quantity'
                                            name='quantity'
                                            InputProps={{ inputProps: { min: 0, max: 99 } }}
                                            sx={{ m: 1, width: '110px' }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button
                                            color="secondary"
                                            startIcon={<AddCardOutlined />}
                                            disabled={getValues('status') == 'Completado'}
                                            sx={{ m: 1, width: '150px', height: '30px', }}
                                            //type="submit"
                                            // disabled={isSaving}
                                            onClick={() => onAddItem()}
                                        >
                                            Agregar
                                        </Button>
                                    </Box>
                                </Box>

                                <Divider sx={{ m: 1 }} />
                                <Grid container className='fadeIn'  >
                                    <Grid item lg={12} xs={12} sx={{ height: 300, width: '100%' }}>
                                        <DataGrid sx={{
                                            boxShadow: 2,
                                            border: 1,
                                            borderColor: 'teal',
                                            color: 'secondary.main',
                                            '& .MuiDataGrid-cell:hover': {
                                                color: 'primary.main',
                                            },
                                            ml: 1
                                        }}
                                            rows={rows}
                                            columns={columns}
                                            autoPageSize
                                        />
                                    </Grid>

                                </Grid>
                                <Divider sx={{ m: 1 }} />
                                <Box display='flex' flexDirection='row' justifyContent='space-between' sx={{ m: 1 }}>
                                    <Button
                                        color="error"
                                        startIcon={<DeleteOutline />}
                                        sx={{ width: '100px', height: '30px', ml: 1, mt: 1 }}
                                        type="button"
                                        onClick={() => onDelete(getValues('_id'))}
                                    >
                                        Eliminar
                                    </Button>
                                    <Button
                                        color="secondary"
                                        startIcon={<SaveOutlined />}
                                        sx={{ width: '100px', height: '30px', m: 1 }}
                                        type="submit"

                                        disabled={isSaving || getValues('status') == 'Completado'}
                                    >
                                        Guardar
                                    </Button>
                                    <Button
                                        color="primary"
                                        startIcon={<SaveAltOutlined />}
                                        sx={{ width: '160px', height: '30px', mt: 1 }}
                                        onClick={() => onProcessOrder(order)}
                                        disabled={isSaving || getValues('status') !== 'En proceso'}
                                    >
                                        Procesar pedido
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box >

    )
}



