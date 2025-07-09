import React from 'react'
import { CiText } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='p-6'>
      <h1 className='text-center text-2xl font-medium'>Our Services</h1>
      <div className='grid grid-cols-6 gap-3 p-3'>
        <Link to={'/text-editor'} className='text-center shadow rounded-2xl p-3'>
          <CiText className='text-4xl mx-auto mb-2' />
          <h3 className='text-xl font-medium'>Text Case</h3>
        </Link>

        <Link to={'/htlm-editor'} className='text-center shadow rounded-2xl p-3'>
          <FaCode className='text-4xl mx-auto mb-2' />
          <h3 className='text-xl font-medium'>Text To HTML</h3>
        </Link>

        <Link to={'/password-generator'} className='text-center shadow rounded-2xl p-3'>
          <RiLockPasswordFill className='text-4xl mx-auto mb-2' />
          <h3 className='text-xl font-medium'>Password Genereator</h3>
        </Link>
      </div>
    </div>
  )
}

export default Home
