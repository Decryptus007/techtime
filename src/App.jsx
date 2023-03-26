import React from 'react'
import 'flowbite'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MediaSection from './components/MediaSection'
import WhySection from './components/WhySection'
import CoursesSection from './components/CoursesSection'
import ReviewSection from './components/ReviewSection'
import ConnectSection from './components/ConnectSection'
import FaqSection from './components/FaqSection'

import './App.css'
import adBanner from './assets/images/ad-banner.png'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className='overflow-hidden'>
        <Hero />
        <div
          style={{ backgroundImage: `url(${adBanner})` }}
          className="relative bg-[#CCDBF0] bg-no-repeat bg-contain bg-center h-[60px] lg:h-[96px]"
        >
        </div>
        <MediaSection />
        <WhySection />
        <CoursesSection />
        <ReviewSection />
        <ConnectSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
