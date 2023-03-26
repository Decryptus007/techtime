import React from 'react'
import Container from './Container'

import connectImg from '../assets/images/connect-img.png'

function ConnectSection() {
  return (
    <div className='bg-primary'>
      <Container>
        <div className="py-[40px] relative lg:py-[86px]">
          <div className="w-full text-center">
            <span className="text-white block text-center uppercase mx-auto">
              join our community
            </span>
            <h2 className="text-white text-center lg:max-w-[1203px]">
              are you ready to connect with the future talent of the tech world
            </h2>
            <span className="text-white block text-center mx-auto">
              meet up with other techstars and grow together
            </span>
          </div>
          <img src={connectImg} alt="" className='mt-6 mx-auto lg:mt-[31.74px]' />
          <button className="btn-white block mx-auto lg:mt-[40.8px]">join our community</button>
        </div>
      </Container>
    </div>
  )
}

export default ConnectSection