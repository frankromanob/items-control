
import { SummaryTile } from '@/ui/SummaryTile'
import { CancelPresentationRounded, CategoryRounded, ContactsRounded, FactCheckRounded, PendingActionsRounded, ProductionQuantityLimitsRounded, ReceiptLongRounded } from '@mui/icons-material'
import { Grid } from '@mui/material'



export const DashboardPage = async () => {

    interface DashboardDataResponse {
        totalOrders: number
        completedOrders: number
        pendingOrders: number
        totalClients: number
        totalProducts: number
        productosWithoutInventory: number
        lowInventory: number
    }

    const resp = await fetch(process.env.HOST_NAME + '/api/dashboard', { cache: 'no-store' })


    if (!resp.ok) {
        throw new Error('Error al cargar datos del Dashboard')
    }

    const data = await resp.json()


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
        <div>
            <Grid container spacing={2}>
                <SummaryTile path ={'/pedidos'} title={totalOrders} subTitle={'Total de pedidos'} icon={<ReceiptLongRounded color='secondary' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/pedidos'} title={completedOrders} subTitle={'Pedidos completados'} icon={<FactCheckRounded color='success' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/pedidos'} title={pendingOrders} subTitle={'Pedidos pendientes'} icon={<PendingActionsRounded color='error' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/clientes'} title={totalClients} subTitle={'Clientes'} icon={<ContactsRounded color='primary' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/productos'} title={totalProducts} subTitle={'Productos'} icon={<CategoryRounded color='warning' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/productos'} title={productosWithoutInventory} subTitle={'Sin existencia'} icon={<CancelPresentationRounded color='error' sx={{ fontSize: 40 }} />} />
                <SummaryTile path ={'/productos'} title={lowInventory} subTitle={'Bajo inventario'} icon={<ProductionQuantityLimitsRounded color='warning' sx={{ fontSize: 40 }} />} />
                {/* <SummaryTile title={refreshIn} subTitle={'Actualización en:'} icon={<AccessTimeOutlined color='secondary' sx={{ fontSize: 40 }} />} /> */}
            </Grid>
        </div>
    )
}


export default DashboardPage