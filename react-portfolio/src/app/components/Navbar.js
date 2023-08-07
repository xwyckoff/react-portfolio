"use client"

import Link from 'next/link';

export default function NavBar() {
    return (
            <nav className="bg-brand-primary sticky top-0 backdrop-blur-md text-brand-text bg-opacity-60 z-50">
                <div className="max-w-8xl py-4 mx-10">
                    <div className="flex justify-between">
                        <div className="navbar--logo">xwyckoff</div>
                        <div className="navbar--links flex gap-5">
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                <Link href="/AboutMe">About Me</Link>
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                Portfolio
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                Contact
                            </div>
                            <div className="transition hover:cursor-pointer hover:scale-125">
                                Resume
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}