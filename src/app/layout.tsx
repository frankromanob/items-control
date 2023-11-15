import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FooterPage from '@/ui/Footer'
import { SideBar } from '@/ui/SideBar'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <header>

      </header>
      <body className={inter.className} style={{display:'flex', flexDirection:'row', marginTop:'10px', marginInlineStart:'10px'}}>
        <div className={styles.description} style={{ borderColor: 'white' }}>
          <SideBar />
          {children}
        </div>
      </body>

      <footer>
        <FooterPage />
      </footer>

    </html>
  )
}
