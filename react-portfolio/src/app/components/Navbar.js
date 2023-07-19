export default function NavBar() {
    return (
        <nav className="bg-brand-primary sticky top-0 backdrop-blur-md text-brand-text bg-opacity-60">
            <div className="max-w-8xl py-4 mx-10">
                <div className="flex justify-between">
                    <div className="navbar--logo">xwyckoff</div>
                    <div className="navbar--links flex gap-5">
                        <div className="hover:cursor-pointer">
                            About Me
                        </div>
                        <div className="hover:cursor-pointer">
                            Portfolio
                        </div>
                        <div className="hover:cursor-pointer">
                            Contact
                        </div>
                        <div className="hover:cursor-pointer">
                            Resume
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}