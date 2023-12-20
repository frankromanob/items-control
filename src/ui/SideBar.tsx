'use client'
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useRouter } from "next/navigation";
import { AddRounded, AddShoppingCartRounded, CategoryRounded, ContactsRounded, HomeRounded, StarHalfRounded } from '@mui/icons-material';
import { logOut } from '../app/lib/user';
import { useState, useEffect } from 'react';

export const SideBar = () => {

    const router = useRouter()
    const onHandleclick = (ruta: string) => {
        router.push(ruta)
    }

    const logOff = () => {
        logOut()
        router.push('/login')
    }
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null; // return this null to avoid hydration errors
    }
    return (
        <Box sx={{ width: '190px' }}>
            <Typography sx={{ display: { xs: 'none', sm: 'block' }, marginInlineStart: 1 }} variant='h2' color='secondary'>
                Menu principal
            </Typography>
            <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
            <List sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' } }}  >

                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={() => onHandleclick('/')}>
                    <ListItemIcon  >
                        <HomeRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Inicio</Typography>} />
                </ListItemButton>

                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={() => onHandleclick('/productos')}>
                    <ListItemIcon >
                        <CategoryRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Mis productos</Typography>} />
                </ListItemButton>

                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={() => onHandleclick('/clientes')} >
                    <ListItemIcon>
                        <ContactsRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Mis clientes</Typography>} />
                </ListItemButton>

                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={() => onHandleclick('/pedidos')} >
                    <ListItemIcon>
                        <AddShoppingCartRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Pedidos</Typography>} />
                </ListItemButton>

                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={() => onHandleclick('/entradas')} >
                    <ListItemIcon>
                        <AddRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Entradas</Typography>} />
                </ListItemButton>

                <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
                <ListItemButton sx={{ paddingInlineStart: 0, mr: 1 }} onClick={logOff}>
                    <ListItemIcon>
                        <StarHalfRounded color='secondary' />
                    </ListItemIcon>
                    <ListItemText sx={{ display: { xs: 'none', sm: 'block' } }} primary={<Typography color='primary'>Cerrar sesión</Typography>} />
                </ListItemButton>
            </List>
        </Box>
    )
}
