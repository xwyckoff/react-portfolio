

import './globals.css'
import { Advent_Pro } from 'next/font/google'
import BackgroundOrbs from './components/BackgroundOrbs'
import Navbar from './components/Navbar'


const adventpro = Advent_Pro({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body className={`bg-brand-primary text-brand-text h-screen ${adventpro.className} items-center justify-center`}>
            <div className='sticky top-1/4 right-2/4 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-5xl z-[-10]'>
              <BackgroundOrbs />
            </div>
            <Navbar />
            {children}
        </body>
    </html>
  )
}
