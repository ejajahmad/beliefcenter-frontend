import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='bg-gray-900 py-3 text-center text-white text-sm'>
        <Container>
           <div className='sm:flex justify-between'>
              <div> &copy; 2025 Belief Center Inc.  All Rights Reserved</div>
              <div className='flex gap-1 sm:gap-2 items-center justify-center sm:justify-end mt-2 sm:mt-0'>
                <Link href="#"><FaFacebookSquare size={16} /></Link>
                <Link href="#"><FaInstagramSquare size={16} /></Link>
                <Link href="#"><FaLinkedin size={16} /></Link>
                <Link href="#"><FaTwitterSquare size={16} /></Link>
                <Link href="#"><FaYoutube size={20} /></Link>
              </div>
           </div>
        </Container>
    </div>
  )
}
