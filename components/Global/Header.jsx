import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='h-16 bg-blue-500'>
        <div className='container'>
            <Image src="/images/logo.png" width={120} height={60}  alt='logo'/>
        </div>
    </div>
  )
}

export default Header