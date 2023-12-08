import type { Metadata } from 'next'
import FooterPage from '@/ui/Footer'
import { SideBar } from '@/ui/SideBar'
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/ui/theme'



export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <html lang='en'>
        <body >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: { sm: '190px' }, display: 'flex', justifyContent: { xs: 'center' } }}>
              <SideBar />
            </Box>

            <Box sx={{ display: 'flex' }} >
              {children}
            </Box>

          </Box>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, }}>
            <FooterPage />
          </Box>
        </body>
      </html>
    </ThemeProvider>
  )
}
