import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xander Wyckoff',
  description: "Xander Wyckoff's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`bg-brand-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
