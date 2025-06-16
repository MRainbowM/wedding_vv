import Container from '../components/Container/Container'
import '../styles/globals.scss'

export const dynamic = 'force-dynamic';



export default async function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {



  return (
    <html lang="ru">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}