import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
    {src: "/assets/icons/search.svg", alt: "search"},
    {src: "/assets/icons/black-heart.svg", alt: "heart"},
    {src: "/assets/icons/user.svg", alt: "user"}
]

const NavBar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href="/" className="flex items-center gap-1">
            <Image 
                src="/assets/icons/logo.svg"
                width={27}
                height={27}
                alt='logo'
            />
            <p className='nav-logo'>
                Ghost<span className='text-primary'>Finder</span>
            </p>
        </Link>

        <div className='flex items-center gap-5'>
            {
                navIcons.map((icon) => (
                    <Image 
                        src={icon.src}
                        key={icon.alt}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className='object-fit'
                    />
                ))
            }
        </div>
      </nav>
    </header>
  )
}

export default NavBar
