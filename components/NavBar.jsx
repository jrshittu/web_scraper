import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      </nav>
    </header>
  )
}

export default NavBar
