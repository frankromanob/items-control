
import Dashboard from '@/components/Dashboard'
import { Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'


export default function HomePage() {
  const cookieStore = cookies()
  //const userName = Cookies.get('items-control-user')
  const userName = cookieStore.get('items-control-user')
  return (
    <div style={{
      margin: 1, border: 0, borderColor: 'teal',
      width: '95%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'
    }}   >
      {userName && <Typography sx={{ m: 1, display: 'flex' }} variant='h2' component='h2' color='primary'>Hola {userName.value}</Typography>}
      <Typography sx={{ m: 1, display: 'flex' }} variant='h2' color='primary'>Dashboard</Typography>
      <Dashboard />
    </div>
  )
}
