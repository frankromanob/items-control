'use client'
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

interface Props {
    path:string
    title: string | number
    subTitle: string
    icon: JSX.Element
}

export const SummaryTile = ({ path, title, subTitle, icon }: Props) => {
    const router = useRouter()
    const onHandleclick = (ruta: string) => {
        router.push(ruta)
    }
    return (
        <Grid item xs={12} sm={4} md={3} >
            <div style={{display:'block', width:'100%',cursor:'pointer' }} onClick={() => onHandleclick(path)}>

            <Card sx={{ display: 'flex' }}  >

                <CardContent  sx={{ width: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {icon}
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h3'>{title}</Typography>
                    <Typography variant='caption'>{subTitle}</Typography>

                </CardContent>
            </Card>
            </div>
        </Grid>
    )
}


export default SummaryTile