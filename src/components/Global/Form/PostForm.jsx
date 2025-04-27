import React from 'react'
import { MdPrivacyTip } from "react-icons/md";

export default function PostForm() {
  return (
    <>
        <input type='text' className='formcontrol mb-4' name='fullname' placeholder='Full Name' />
        <input type='email' className='formcontrol mb-4' name='email' placeholder='Email' />
        <input type='tel' className='formcontrol mb-4' name='phoneno' placeholder='Phone' />
        <p className='bg-gray-50 text-gray-700 text-sm mb-4 px-2 py-1 border border-gray-100 rounded-lg flex items-center gap-1 justify-center'><MdPrivacyTip className='text-blue-500' /> We do not spam. We value your privacy.</p>
        <button className='btnprimary w-full'>Apply Now</button>
    </>
  )
}
