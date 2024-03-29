import './globals.css'
import { Advent_Pro } from 'next/font/google'
import BackgroundOrbs from './components/BackgroundOrbs'
import Navbar from './components/Navbar'


const adventpro = Advent_Pro({ subsets: ['latin'] })
export const metadata = {
  title: "Xander Wyckoff's Portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`bg-brand-primary text-brand-text h-screen pt-20 ${adventpro.className} `}>
            <Navbar />
            <div className='fixed top-1/4 right-2/4 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-5xl z-[-10]'>
              <BackgroundOrbs />
            </div>
            {children}
        </body>
    </html>
  )
}
