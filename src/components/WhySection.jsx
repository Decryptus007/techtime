import React from 'react'
import Container from './Container'

import whyImg from '../assets/images/why-image.png'
import expMentors from '../assets/images/expMentors.png'
import oneOnOne from '../assets/images/why-one-one.png'
import oneOnTwo from '../assets/images/one-one-two.png'
import affordable from '../assets/images/affordable-why.png'

function WhySection() {
  return (
    <Container>
      <div className="py-[40px] flex flex-col relative lg:flex-row lg:justify-between lg:items-center lg:py-[80px]">
        {/* Absolutes */}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-2 left-1/4 hidden lg:block'>
          <path d="M5 9C2.792 9 1 7.208 1 5C1 2.792 2.792 1 5 1C7.208 1 9 2.792 9 5C9 7.208 7.208 9 5 9Z" fill="#FFBE4E" stroke="#FFBE4E" strokeWidth="0.08" />
        </svg>
        <svg width="77" height="22" viewBox="0 0 77 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-2 right-1/4 hidden lg:block'>
          <path d="M14.2 20.7188L1 3.99906L3.1 2.34958L14.2 16.3702L26.35 1L38.5 16.3702L50.65 1L62.8 16.3702L73.9 2.34958L76 3.99906L62.8 20.7188L50.65 5.34863L38.5 20.7188L26.35 5.34863L14.2 20.7188Z" fill="#FFBE4E" stroke="#FFBE4E" strokeWidth="0.749882" />
        </svg>
        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"
          className='absolute bottom-12 -left-6'>
          <path d="M18.9435 29.1277C18.3735 29.1277 17.8035 28.858 17.4435 28.3785L1.3935 7.37041C0.973495 6.83097 0.883495 6.14169 1.1535 5.51234C1.4235 4.883 1.9635 4.46344 2.6535 4.37353L28.9035 1.01704C29.5635 0.927131 30.2235 1.19685 30.6135 1.73629C31.0335 2.27572 31.1235 2.965 30.8535 3.59435L20.6535 27.9889C20.3835 28.6182 19.8435 29.0378 19.1535 29.1277H18.9435ZM6.3135 7.67009L18.4335 23.5535L26.1435 5.12275L6.3135 7.67009Z" fill="#00D280" stroke="#00D280" strokeWidth="0.299927" />
        </svg>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-4 right-0 lg:-right-6'>
          <path d="M14 27C6.824 27 1 21.176 1 14C1 6.824 6.824 1 14 1C21.176 1 27 6.824 27 14C27 21.176 21.176 27 14 27ZM14 5.316C9.216 5.316 5.316 9.216 5.316 14C5.316 18.784 9.216 22.684 14 22.684C18.784 22.684 22.684 18.784 22.684 14C22.684 9.216 18.784 5.316 14 5.316Z" fill="#9143FD" stroke="#9143FD" strokeWidth="0.26" />
        </svg>

        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h2>this is why we are best from others</h2>
          <span className="mt-2 lg:mt-4">
            high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
          </span>
          <img src={whyImg} alt="" className='mt-6 lg:mt-8' />
        </div>
        <div className="flex gap-2 flex-wrap mt-8 lg:mt-0 lg:pl-[20px] lg:w-1/2">
          <div className="why-card">
            <img src={expMentors} alt="" />
            <div className='flex flex-col'>
              <b>experienced mentors</b>
              <span>
                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.
              </span>
            </div>
          </div>
          <div className="why-card">
            <img src={oneOnOne} alt="" />
            <div className='flex flex-col'>
              <b>one-on-one meetings</b>
              <span>
                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.
              </span>
            </div>
          </div>
          <div className="why-card">
            <img src={oneOnTwo} alt="" />
            <div className='flex flex-col'>
              <b>One-On-One Meetings</b>
              <span>
                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.
              </span>
            </div>
          </div>
          <div className="why-card">
            <img src={affordable} alt="" />
            <div className='flex flex-col'>
              <b>affordable prices</b>
              <span>
                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhySection