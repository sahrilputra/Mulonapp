import './styles/globals.styles.scss'
import FootersIndex from '../components/footers/Footer'
import TestNavbars from '../components/navbars/Navbar';
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';

import DashboardPage from '../ui/DashboardLayout';
import LandingLayout from '../ui/LadingLayout';

export const metadata = {
  title: 'Mulon',
  description: 'Kupang bersih bersama Mulon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
