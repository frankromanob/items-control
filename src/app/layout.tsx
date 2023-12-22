
import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/ui/theme'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div style={{ display: 'flex', }} >
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
