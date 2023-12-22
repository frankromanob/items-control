
import type { Metadata } from 'next'
import FooterPage from '@/ui/Footer'
import { SideBar } from '@/ui/SideBar'
import { Box } from '@mui/material';
import { Suspense } from 'react';
import Loading from './loading';



export const metadata: Metadata = {
  title: 'Items Control 1.0',
  description: 'by RomApps',
  authors: [{ name: "Francisco Romano", url: "https://github.com/frankromanob" }]
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main lang='en' >
      <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
        <div >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: { sm: '190px' }, display: 'flex', justifyContent: { xs: 'center' } }}>
              <SideBar />
            </Box>

            <div style={{ display: 'flex' }} >
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
          </Box>
        </div>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, }}>
          <FooterPage />
        </Box>
      </div>
    </main>
  )
}
