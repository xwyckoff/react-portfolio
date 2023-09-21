"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
    let visibility = pathname == "/" ? "hidden" : ""
    return (
            <nav className={`bg-brand-primary sticky top-0 backdrop-blur-md text-brand-text bg-opacity-60 z-50 ${visibility}`}>
                <div className="max-w-8xl py-4 mx-10">
                    <div className="flex justify-between">
                        <div className="navbar--logo transition hover:cursor-pointer hover:scale-125">
                            <Link href="/">xwyckoff</Link>
                        </div>
                        <div className="navbar--links flex gap-5">
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                <Link href="/AboutMe">About Me</Link>
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                <Link href="/Portfolio">Portfolio</Link>
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                <Link href="/Contact">Contact</Link>
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                <Link href="/Wyckoff, Xander resume.pdf">Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}