// import Container from '../components/Container/Container'
import '../styles/globals.scss'
import clsx from 'clsx';
export const dynamic = 'force-dynamic';
import { denistina_font, lagunac_font, lagunac_bold_font } from './fonts'


export default async function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {



  return (
    <html lang="ru">
      <body

        className={clsx(
          `${denistina_font.variable} font-sans`,
          `${lagunac_font.variable} font-sans`,
          `${lagunac_bold_font.variable} font-sans`,
        )}>
        {/* <Container> */}
        {children}
        {/* </Container> */}
      </body>
    </html>
  )
}