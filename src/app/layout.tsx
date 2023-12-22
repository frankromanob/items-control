
import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/ui/theme'



export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <body >
            <div style={{ display: 'flex',   }} >
              {children}
            </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
