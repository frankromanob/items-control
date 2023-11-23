import type { Metadata } from 'next'
import FooterPage from '@/ui/Footer'
import { SideBar } from '@/ui/SideBar'
import { Box, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/ui/theme'



export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <html lang='en' >
        <body >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, }}>
            <Box sx={{width: { sm: '190px' }}}>
              <SideBar />
            </Box>

            <Box >
              {children}
            </Box>

          </Box>
          <section style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <FooterPage />
          </section>
        </body>
      </html>
    </ThemeProvider>
  )
}
