import type { Metadata } from 'next'
import FooterPage from '@/ui/Footer'
import { Box, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/ui/theme'



export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang='en' >
      <body >
        <ThemeProvider theme={mainTheme}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box >
              {children}
            </Box>
          </Box>
          <section style={{ display: 'flex', justifyContent: 'center' }}>
            <FooterPage />
          </section>
        </ThemeProvider>
      </body>
    </html>
  )
}
