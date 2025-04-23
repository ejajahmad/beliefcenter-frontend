import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'

function Header() {
    return (
        <Container>
            <div className="flex items-center justify-between py-3">
                <Link href="#">
                    <img src="/images/logo.png" alt="logo" width={160} height={60} />
                </Link>
                <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                    Sign In
                </button>
            </div>
        </Container>
    )
}

export default Header