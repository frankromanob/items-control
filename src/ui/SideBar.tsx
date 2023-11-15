'use client'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { AccountCircleOutlined } from "@mui/icons-material"
import { useRouter } from "next/navigation";

export const SideBar = () => {

    const router = useRouter()
    const onHandleclick = (ruta: string) => {
        router.push(ruta)
    }

    const logOff = () => {
        console.log('sesion cerrada')
    }

    return (
        <Box>
            <Typography>
                Menu principal
            </Typography>
            <Divider />
            <List >
                <ListItemButton onClick={() => onHandleclick('/')} >
                    <ListItemIcon>
                        <AccountCircleOutlined />
                    </ListItemIcon>
                    <ListItemText primary={'Resumen de items'} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/salidas')} >
                    <ListItemIcon>
                        <AccountCircleOutlined />
                    </ListItemIcon>
                    <ListItemText primary={'Registrar salida'} />
                </ListItemButton>
                <ListItemButton onClick={() => onHandleclick('/entradas')} >
                    <ListItemIcon>
                        <AccountCircleOutlined />
                    </ListItemIcon>
                    <ListItemText primary={'Entradas'} />
                </ListItemButton>
                <Divider />
                <ListItemButton  onClick={logOff}>
                    <ListItemIcon>
                        <AccountCircleOutlined  />
                    </ListItemIcon>
                    <ListItemText primary={'Cerrar sesión'} />
                </ListItemButton>
            </List>
        </Box>
    )
}
