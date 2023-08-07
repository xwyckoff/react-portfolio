"use client"

import './globals.css'
import { Advent_Pro } from 'next/font/google'
import BackgroundOrbs from './components/BackgroundOrbs'
import Navbar from './components/Navbar'
import { usePathname } from 'next/navigation';

const adventpro = Advent_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Xander Wyckoff',
  description: "Xander Wyckoff's Portfolio",
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
        <body className={`bg-brand-primary text-brand-text h-screen ${adventpro.className}`}>
            <div className='sticky top-1/4 right-2/4 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-5xl z-[-10]'>
              <BackgroundOrbs />
            </div>
            {pathname == '/' ? null : <Navbar />}
            {console.log(pathname)}
            {children}
        </body>
    </html>
  )
}
