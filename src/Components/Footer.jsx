import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='border border-black flex justify-between bg-gray-800 text-white pt-2 pb-2'>
        <h2 className='text-5xl md:ml-8'>TravelBro</h2>
        <div className='md:mr-8 ml-7 text-white underline'>
            <ul className='md:grid md:grid-cols-2 md:text-2xl text-xl flex flex-col gap-4'>
              <Link to="/">
                <li className='cursor-pointer hover:text-orange-300'>Home</li>
              </Link>
              <Link to="/about">
                <li className='cursor-pointer hover:text-orange-300'>About Us</li>
              </Link>
              <Link to='/contact'>
                <li className='cursor-pointer hover:text-orange-300'>Email Us</li>
              </Link>
            </ul>
        </div>
    </footer>
  )
}

export default Footer