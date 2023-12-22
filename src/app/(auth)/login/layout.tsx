
import FooterPage from '@/ui/Footer'


export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ display: 'flex', width:'100%', justifyContent: 'center',flexDirection:'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <FooterPage />
      </section>
    </main>
  )

}
