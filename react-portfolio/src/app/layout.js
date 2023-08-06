"use client"

import './globals.css'
import { Advent_Pro } from 'next/font/google'
import Navbar from './components/Navbar'

const adventpro = Advent_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Xander Wyckoff',
  description: "Xander Wyckoff's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <main className={`bg-brand-primary ${adventpro.className}`}>
          <Navbar />
            {children}
        </main>
    </html>
  )
}
