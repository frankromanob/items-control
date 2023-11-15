import { SideBar } from '@/ui/SideBar'
import styles from '@/app/page.module.css'
import { Typography } from '@mui/material'

export default function Salidas() {
  return (
    <main className={styles.main}style={{
      margin:'0px auto',
      maxWidth:'1440px',
      padding:'0px 0px'
  }}>
      <div className={styles.description}>
        <Typography >Registrar entradas</Typography>
      </div>
    </main>
  )
}
