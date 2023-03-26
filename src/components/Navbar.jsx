import React, { useEffect, useState } from 'react'
import Container from './Container'

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    if (openNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openNavbar]);

  return (
    <nav className={`h-[87px] bg-primary flex items-center lg:h-[150px]`}>
      <Container>
        <div className="relative flex justify-between">
          <a href="/" className='header-text'>Tech Time</a>

          {/* Mobile Toggler */}
          <button className='cursor-pointer lg:hidden' onClick={() => setOpenNavbar(!openNavbar)}>
            {
              !openNavbar ?
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="white" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            }
          </button>

          <div className={`${!openNavbar ? 'w-0 h-0 overflow-hidden' : 'px-4 z-40 top-[87px] right-0 w-[75vw] bg-primary h-[calc(100vh-87px)]'} flex fixed transition-[height] gap-6 items-end flex-col lg:overflow-visible lg:h-auto lg:p-0 lg:w-auto lg:static lg:flex-row lg:bg-transparent lg:items-center`}>
            <a href="/" className='nav-links active'>Home</a>
            <a href="/" className='nav-links'>About Us</a>
            <a href="/" className='nav-links'>Courses</a>
            <a href="/" className='nav-links'>Testimonial</a>
            <a href="/" className='nav-links'>Community</a>
            <a href="/" className='btn-white mt-4 text-base lg:mt-0 lg:ml-4'>Enroll Now</a>
          </div>

          {/* Backdrop */}
          {
            openNavbar &&
            <div onClick={() => setOpenNavbar(!openNavbar)}
              className="fixed top-[87px] z-20 left-0 w-screen h-[calc(100vh-87px)]"
            >
            </div>
          }
        </div>
      </Container>
    </nav>
  )
}

export default Navbar