'use client'
import { SummaryTile } from '@/ui/SummaryTile'
import { AccessTimeOutlined, AttachMoneyOutlined, CancelPresentationOutlined, CategoryOutlined, CreditCardOffOutlined, CreditCardOutlined, GroupOutlined, ProductionQuantityLimitsOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';

export const DashboardPage = () => {

    interface DashboardDataResponse {
        totalOrders: number
        completedOrders: number
        pendingOrders: number
        totalClients: number 
        totalProducts: number
        productosWithoutInventory: number 
        lowInventory: number 
    }
    const { data, error } = useSWR<DashboardDataResponse>('api/dashboard')
    // const { data, error } = useSWR<DashboardDataResponse>('api/dashboard', {
    //     refreshInterval: 30 * 1000
    // })

    // const [refreshIn, setRefreshIn] = useState(30)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setRefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30)
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])


    if (!error && !data) {
        return <></>
    }
    if (error) {
        return <Typography>Error al cargar información</Typography>
    }


    const {
        totalOrders,
        completedOrders,
        pendingOrders,
        totalClients,
        totalProducts,
        productosWithoutInventory,
        lowInventory
    } = data!




    return (

            <Grid container spacing={2}>
                <SummaryTile title={totalOrders} subTitle={'Total de pedidos'} icon={<ReceiptLongOutlinedIcon color='secondary' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={completedOrders} subTitle={'Pedidos completados'} icon={<FactCheckOutlinedIcon color='success' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={pendingOrders} subTitle={'Pedidos pendientes'} icon={<PendingActionsOutlinedIcon color='error' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={totalClients} subTitle={'Clientes'} icon={<GroupOutlined color='primary' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={totalProducts} subTitle={'Productos'} icon={<CategoryOutlined color='warning' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={productosWithoutInventory} subTitle={'Sin existencia'} icon={<CancelPresentationOutlined color='error' sx={{ fontSize: 40 }} />} />
                <SummaryTile title={lowInventory} subTitle={'Bajo inventario'} icon={<ProductionQuantityLimitsOutlined color='warning' sx={{ fontSize: 40 }} />} />
                {/* <SummaryTile title={refreshIn} subTitle={'Actualización en:'} icon={<AccessTimeOutlined color='secondary' sx={{ fontSize: 40 }} />} /> */}
            </Grid>

    )
}


export default DashboardPage