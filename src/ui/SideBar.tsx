'use client'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useRouter } from "next/navigation";
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import SouthIcon from '@mui/icons-material/South';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const SideBar = () => {

    const router = useRouter()
    const onHandleclick = (ruta: string) => {
        router.push(ruta)
    }

    const logOff = () => {
        console.log('sesion cerrada')
    }

    return (
        <Box sx={{ width: '190px' }}>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h2' color='secondary'>
                Menu principal
            </Typography>
            <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
            <List sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' } }}  >
                <ListItemButton onClick={() => onHandleclick('/')} >
                    <ListItemIcon> <CategoryIcon /> </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Mis productos</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/clientes')} >
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Mis clientes</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/pedidos')} >
                    <ListItemIcon>
                        <ArrowOutwardIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Pedidos</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/entradas')} >
                    <ListItemIcon>
                        <SouthIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Entradas</Typography>} />
                </ListItemButton>
                <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
                <ListItemButton onClick={logOff}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Cerrar sesión</Typography>} />
                </ListItemButton>
            </List>
        </Box>
    )
}
