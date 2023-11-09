import './styles/globals.styles.scss'
import FootersIndex from '../components/footers/Footer'
import MainNavbars from '../components/navbars/MainNavbars'
export const metadata = {
  title: 'Mulon',
  description: 'Kupang bersih bersama Mulon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavbars />
        <>
          {children}
        </>
        <FootersIndex />
      </body>
    </html>
  )
}
