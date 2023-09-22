"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-brand-text">
      <motion.h1 className="text-3xl xl:text-9xl lg:text-8xl md:text-6xl sm:text-5xl" initial="hidden" animate="visible" variants={{
        hidden: {
          opacity: 0,
          y: -100
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }}>Hi. My name is Xander.</motion.h1>
      <Link href="/AboutMe"><button className='transition duration-300 bg-brand-secondary hover:bg-brand-tertiary hover:scale-110 text-3xl p-3 my-5 rounded-xl'>About Me</button></Link>
    </main>
  )
}
