
import Dashboard from '@/components/Dashboard'
import { Box, Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { revalidatePath } from 'next/cache'


export default function HomePage() {
  revalidatePath('/')
  const userName = Cookies.get('items-control-user')
  return (
    <Box sx={{
      m: 1, border: 0, borderColor: 'teal',
      width: '95%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
    }}   >
      {userName && <Typography sx={{ m: 1, display: 'flex' }} variant='h2' component='h2' color='primary'>Hola {userName}</Typography>}
      <Typography sx={{ m: 1, display: 'flex' }} variant='h2' color='primary'>Dashboard</Typography>
      <Dashboard />
    </Box>
  )
}
