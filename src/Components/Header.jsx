import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <header className='w-full bg-gray-900 text-white text-xl p-2 sticky top-0 z-10'>
        <nav className='w-full flex justify-between'>
            <h2>TravelBro</h2>
            <ul className='flex gap-4'>
                <li className='hidden md:block hover:underline'>
                    <NavLink to='/' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer `}>
                        <img src="src/images/home.svg" alt="Home" />
                        Home
                    </NavLink>
                </li>
                <li className='hidden md:block hover:underline'>
                    <NavLink to='/about' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer`}>
                        <img src="src/images/about_us.svg" alt="about us" />
                            About Us
                    </NavLink>
                </li>
                <li className='hidden md:block hover:underline'>
                    <NavLink to='/contact' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer`}>
                        <img src="src/images/contact.svg" alt="contact" />
                            Contact
                    </NavLink>
                </li>
                <li className='flex items-center cursor-pointer md:hidden mr-6' onClick={()=>setIsOpen(!isOpen)}>
                    <img src="src/images/menu.svg" alt="Menu" />
                    Menu
                </li>
            </ul>
        </nav>
        <div className={`absolute right-0 bg-gray-900 ${isOpen ? "block":"hidden"} `}>
            <ul>
                <li>
                    <NavLink to='/' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer border-b-2`}>
                        <img src="src/images/home.svg" alt="Home" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer border-b-2`}>
                        <img src="src/images/about_us.svg" alt="about us" />
                            About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({isActive})=>`${isActive? "text-orange-400":"text-gray-200"} flex items-center cursor-pointer`}>
                        <img src="src/images/contact.svg" alt="contact" />
                            Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header