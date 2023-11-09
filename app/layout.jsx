import './styles/globals.styles.scss'
import FootersIndex from '../components/footers/Footer'
import MainNavbars from '../components/navbars/MainNavbars'
import {Providers} from "./providers";
import TestNavbars from '../components/navbars/Navbar';
export const metadata = {
  title: 'Mulon',
  description: 'Kupang bersih bersama Mulon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          <TestNavbars />
            {children}
          <FootersIndex />
        </Providers>
      </body>
    </html>
  )
}
