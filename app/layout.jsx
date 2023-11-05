import './styles/globals.styles.scss'
import FootersIndex from '../components/footers/Footer'

export const metadata = {
  title: 'Mulon',
  description: 'Kupang bersih bersama Mulon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          {children}
        </>
        <FootersIndex />
      </body>
    </html>
  )
}
