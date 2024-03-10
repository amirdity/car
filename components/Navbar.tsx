import React from 'react'
import Image from 'next/image'
import  CustomButton from './CustomButton'
function Navbar() {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'></nav>
    </header>

  )
}

export default Navbar