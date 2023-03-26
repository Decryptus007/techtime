import React from 'react'
import Container from './Container'

import classesTextSvg from '../assets/svgs/classes-text.svg'
import audioSvg from '../assets/svgs/audio-classes.svg'
import liveSvg from '../assets/svgs/live-classes.svg'
import recordedSvg from '../assets/svgs/recorded-classes.svg'
import notesSvg from '../assets/svgs/notes.svg'
import classesImg from '../assets/images/classes-img.png'
import backdropSvg from '../assets/svgs/classes-backdrop.svg'
import miniCircle from '../assets/images/classes-mini-circled.png'

function MediaSection() {
  return (
    <Container>
      <div className="relative overflow-hidden flex flex-col p-[40px] gap-[40.03px] lg:p-[96px] lg:items-center lg:flex-row">
        {/* Absolute */}
        <svg width="59" height="17" viewBox="0 0 59 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-1/4 -right-[20px]'>
          <path d="M65.668 16.0938L56.59 4.56948L47.41 16.0938L38.332 4.56948L29.254 16.0938L20.074 4.56948L10.996 16.0938L1 3.54963L2.734 2.12184L10.996 12.5243L20.074 1L29.254 12.5243L38.332 1L47.41 12.5243L56.59 1L65.668 12.5243L74.746 1L83.926 12.5243L93.004 1L103 13.6462L101.266 14.972L93.004 4.56948L83.926 16.0938L74.746 4.56948L65.668 16.0938Z" fill="#7FE8BF" stroke="#7FE8BF" strokeWidth="1.01993" />
        </svg>
        <svg width="57" height="140" viewBox="0 0 57 140" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-12 -right-[10px] hidden lg:block'>
          <path d="M83 138.452C37.736 138.452 1 107.83 1 70.0995C1 32.369 37.736 1.74707 83 1.74707C128.264 1.74707 165 32.369 165 70.0995C165 107.83 128.264 138.452 83 138.452ZM83 24.4401C52.824 24.4401 28.224 44.9458 28.224 70.0995C28.224 95.2533 52.824 115.759 83 115.759C113.176 115.759 137.776 95.2533 137.776 70.0995C137.776 44.9458 113.176 24.4401 83 24.4401Z" fill="#EFE8FF" stroke="#EFE8FF" strokeWidth="1.64" />
        </svg>

        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h2 className='relative'>
            <img src={classesTextSvg} alt="" className='absolute -top-4 left-0 w-[24.01px] h-[36.01px] lg:-top-8 lg:-left-10 lg:w-[43.86px] lg:h-[65.51px]' />
            high quality video, audio & live classes
          </h2>
          <span className='mt-2 lg:mt-4'>
            high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
          </span>
          <button className='btn-primary mt-6 lg:mt-8'>View Courses</button>
          <div className="mt-6 w-[277.38px] flex flex-wrap gap-6 lg:w-[492px]">
            <button className="btn-classes">
              <img src={audioSvg} alt="" className='w-[17.59px] h-[17.59px] lg:w-8 lg:h-8' />
              Audio Classes
            </button>
            <button className="btn-classes">
              <img src={liveSvg} alt="" className='w-[17.59px] h-[17.59px] lg:w-8 lg:h-8' />
              Live Classes
            </button>
            <button className="btn-classes">
              <img src={recordedSvg} alt="" className='w-[17.59px] h-[17.59px] lg:w-8 lg:h-8' />
              recorded classes
            </button>
            <button className="btn-classes">
              <img src={notesSvg} alt="" className='w-[17.59px] h-[17.59px] lg:w-8 lg:h-8' />
              50+ notes
            </button>
          </div>
        </div>
        <div className="relative h-fit lg:w-1/2">
          <img src={miniCircle} alt="" className='absolute z-20 top-1/4 left-0 w-[90px] h-[36px] lg:-left-8 lg:w-auto lg:h-auto' />
          <img src={classesImg} alt="" className='relative z-10' />
          <img src={backdropSvg} alt="" className='absolute -right-8 bottom-2 w-[91px] h-[125px] lg:w-auto lg:h-auto' />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-1/4 bottom-0'>
            <path d="M7 13C3.688 13 1 10.312 1 7C1 3.688 3.688 1 7 1C10.312 1 13 3.688 13 7C13 10.312 10.312 13 7 13ZM7 2.992C4.792 2.992 2.992 4.792 2.992 7C2.992 9.208 4.792 11.008 7 11.008C9.208 11.008 11.008 9.208 11.008 7C11.008 4.792 9.208 2.992 7 2.992Z" fill="#C8A1FD" stroke="#C8A1FD" strokeWidth="0.12" />
          </svg>
        </div>
      </div>
    </Container>
  )
}

export default MediaSection