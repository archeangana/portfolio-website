import React, { useState } from 'react'
import Button from '../../components/Button'
import styles from './Navigation.module.css'
import { FiAlignRight, FiX } from "react-icons/fi";

// Static Data
const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contacts', name: 'Contacts' },
];

function NavigationLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className='flex justify-between items-center xl:px-24 px-4 text-white py-6 relative'>
        <div>
          <h1 className='text-2xl font-bold'>arche.</h1>
        </div>
        <div className='md:hidden'>
          {
            isOpen
              ? <FiX onClick={handleIsOpenMenu} size={25} color='white'/>
              : <FiAlignRight onClick={handleIsOpenMenu} size={25} />
          }
        </div>
        <ul className={`md:flex gap-8 items-center md:static absolute top-0 md:h-auto h-screen px-4 md:px-0 w-3/4 md:w-auto transition-all duration-300 ${!isOpen ? '-left-full' : 'left-0'} ${styles.navigation_links}`}>
          {
            links.map((link, index) => (
              <li key={index} className={`${styles.link} md:my-0 my-8`}>
                <Button
                  to={link.path}
                  className={`relative hover:font-bold`}
                  isLink
                >
                  {link.name}
                </Button>
              </li>
            ))
          }
        </ul>
        {/* Overlay */}
        <div className={`absolute top-0 left-0 bg-black bg-opacity-30 w-full h-screen z-10 ${isOpen ? 'block' : 'hidden'}`} onClick={handleIsOpenMenu} />
      </nav>
    </>
  );
}

export default NavigationLayout;
