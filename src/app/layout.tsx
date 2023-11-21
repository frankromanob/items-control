import type { Metadata } from 'next'
import FooterPage from '@/ui/Footer'
import { SideBar } from '@/ui/SideBar'
import { ThemeProvider } from '@mui/material'
import { mainTheme } from '@/ui/theme'
import { ToastContainer,toast } from 'react-toastify'


export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <html lang='en'>
        <body style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <SideBar />
            {/* <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            /> */}
            {children}
          </div>
          <section style={{ display: 'flex', justifyContent: 'flex-start', marginInlineStart: '10px' }}>
            <FooterPage />
          </section>
        </body>
      </html>
    </ThemeProvider>
  )
}
