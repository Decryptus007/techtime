import React from 'react'
import dummy from '../assets/images/course-card-t1.png'

function ReviewCard() {
  return (
    <div className='bg-white mx-auto w-[332px] h-[201.96px] rounded-[16px] py-6 px-4 flex flex-col gap-[10px] lg:w-[603px] lg:h-[296px]'>
      <span className="text-[#A2A2A2] text-start text-[10px] font-semibold leading-[14px] lg:text-[14px] lg:leading-[26px]">
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
      </span>
      <div className="flex items-center gap-1">
        <img src={dummy} alt="" className='w-6 h-6 rounded-full lg:w-10 lg:h-10' />
        <div className="flex flex-col gap-1">
          <span className="text-black text-start font-bold">bella moon</span>
          <span className="text-[#A2A2A2] text-start text-[10px] font-semibold leading-[14px] lg:text-[14px] lg:leading-[26px]">
            product designer
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard