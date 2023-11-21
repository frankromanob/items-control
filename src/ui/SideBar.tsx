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
        <Box >
            <Typography variant='h2' color='secondary'>
                Menu principal
            </Typography>
            <Divider />
            <List >
                <ListItemButton onClick={() => onHandleclick('/')} >
                    <ListItemIcon> <CategoryIcon /> </ListItemIcon>
                    <ListItemText  primary={<Typography color='primary'>Mis productos</Typography>}/>
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/clientes')} >
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='primary'>Mis clientes</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/salidas')} >
                    <ListItemIcon>
                        <ArrowOutwardIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='primary'>Salidas</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/entradas')} >
                    <ListItemIcon>
                        <SouthIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='primary'>Entradas</Typography>} />
                </ListItemButton>
                <Divider />
                <ListItemButton  onClick={logOff}>
                    <ListItemIcon>
                        <LogoutIcon  />
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='primary'>Cerrar sesión</Typography>} />
                </ListItemButton>
            </List>
        </Box>
    )
}
