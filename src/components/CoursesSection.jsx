import React from 'react'
import Container from './Container'
import CourseCard from './CourseCard'

import courseOne from '../assets/images/course-card-one.png'
import courseOneT from '../assets/images/course-card-t1.png'
import courseTwo from '../assets/images/course-card-two.png'
import courseTwoT from '../assets/images/course-card-t2.png'
import courseThr from '../assets/images/course-card-thr.png'
import courseThrT from '../assets/images/course-card-t3.png'
import courseFour from '../assets/images/course-card-four.png'
import courseFourT from '../assets/images/course-card-t4.png'
import courseFive from '../assets/images/course-card-five.png'
import courseFiveT from '../assets/images/course-card-t5.png'
import courseSix from '../assets/images/course-card-six.png'
import courseSixT from '../assets/images/course-card-t6.png'

function CoursesSection() {
  return (
    <Container>
      <div className="py-[40px] flex flex-col relative lg:flex-row lg:justify-between lg:items-center lg:py-[80px]">
        {/* Absolutes */}
        <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[15%] -left-8 lg:top-1/4 lg:left-2'>
          <path fillRule="evenodd" clipRule="evenodd" d="M25.8216 11.803C25.7151 12.5317 25.6005 13.3166 25.4697 14.1012C25.3375 14.8285 25.0069 15.4897 24.6763 16.1509C23.6184 18.0684 22.6927 18.1345 21.5026 16.3493C19.5851 13.44 18.9239 10.1341 18.5272 6.76197C18.5107 6.56361 18.49 6.36524 18.4694 6.16688C18.4074 5.57181 18.3454 4.97674 18.395 4.38167C18.4611 3.52212 18.5933 2.59645 18.99 1.80302C19.6512 0.414513 21.2381 -0.24668 22.7589 0.0839162C24.2796 0.348394 25.3375 1.47242 25.602 3.12541C25.7428 4.58012 25.8502 6.03484 25.9717 7.67866C26.0214 8.35087 26.0734 9.05508 26.1309 9.80346C26.0307 10.3716 25.9304 11.0581 25.8216 11.803ZM49.5715 24.8971C49.7152 24.779 49.8576 24.662 50 24.5481C49.9669 24.482 49.9504 24.3993 49.9339 24.3167C49.9173 24.234 49.9008 24.1514 49.8678 24.0852C49.7396 24.012 49.6114 23.9337 49.4818 23.8545C49.1435 23.6478 48.7956 23.4352 48.4131 23.2918C43.7848 21.176 38.8258 21.3082 33.933 21.8372C33.7567 21.8372 33.5804 21.896 33.404 21.9547C33.3158 21.984 33.2277 22.0135 33.1396 22.0355C31.5527 22.6306 30.5609 24.0191 30.627 25.5399C30.6931 27.0606 31.7511 28.4491 33.3379 28.8458C33.933 29.0442 34.5942 29.0442 35.1893 29.0442C36.7761 28.9781 38.363 28.8458 39.9499 28.7136C42.793 28.4491 45.4378 27.5896 47.8842 26.1349C48.5067 25.7718 49.0479 25.3272 49.5715 24.8971ZM19.1884 35.8545C18.9239 37.7719 18.7917 39.6233 18.6594 41.5407C18.5272 43.5243 18.5933 45.5079 19.1884 47.5576C19.5851 48.9461 20.1802 50.2024 21.3703 51.128C22.4282 51.9215 22.9572 51.8554 23.6845 50.7313C24.6102 49.2767 25.2714 47.756 25.4697 46.0369C25.7305 43.7768 25.9341 41.4882 26.137 39.2086C26.2427 38.0202 26.3482 36.8343 26.4615 35.6561C26.4615 35.3916 26.4615 35.061 26.3954 34.7304C26.197 33.1436 25.0069 31.9534 23.5523 31.689C22.0976 31.3584 20.5769 32.0857 19.8496 33.4742C19.519 34.2015 19.3206 35.061 19.1884 35.8545ZM19.112 28.3303C19.6916 28.1232 20.2984 27.9065 20.5769 27.1267L19.5851 26.73C14.2294 25.8044 8.87378 25.8043 3.45199 26.2011C2.65856 26.2672 1.86513 26.5317 1.20393 26.9284C-0.515169 28.0524 -0.382931 30.4327 1.53453 31.2923C2.26184 31.6229 3.18751 31.689 3.98095 31.689C5.28243 31.627 6.52582 31.4488 7.82002 31.2634C7.90655 31.251 7.99332 31.2386 8.08034 31.2261C11.7169 30.6972 15.3535 29.8376 18.7917 28.4491C18.8959 28.4074 19.0035 28.369 19.112 28.3303Z" fill="#004DB3" />
        </svg>

        <div className="w-full text-center">
          <h2 className='text-center'>browse our popular courses</h2>
          <span className='block text-center mx-auto w-[282.11px] lg:w-[743px]'>
            high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
          </span>
          <div className="mt-4 flex items-center justify-center gap-4 lg:gap-[60px] lg:mt-[56px]">
            <button className="btn-filter active">all categories</button>
            <button className="btn-filter">design</button>
            <button className="btn-filter">development</button>
            <button className="btn-filter">marketing</button>
          </div>
          <div className="mt-[24.11px] flex flex-wrap justify-between gap-y-4 lg:gap-4 lg:mt-[56px]">
            <CourseCard
              coursePreview={courseOne}
              tag={'design'}
              metric={'4.7k'}
              rating={'32.7k+'}
              title={'introduction to user research in ux design'}
              duration={'23hrs 50mins'}
              lessons={15}
              thumbnail={courseOneT}
              tutor={'leonard victor'}
              price={'$15.00'}
            />
            <CourseCard
              coursePreview={courseTwo}
              tag={'marketing'}
              metric={'4.7k'}
              rating={'8.7k+'}
              title={'introduction to  new marketing audience '}
              duration={'22hrs 30mins'}
              lessons={22}
              thumbnail={courseTwoT}
              tutor={'Jeffrey williams'}
              price={'$32.00'}
            />
            <CourseCard
              coursePreview={courseThr}
              tag={'development'}
              metric={'4.7k'}
              rating={'12.7k+'}
              title={'introduction to html, css & bootstrap'}
              duration={'45hrs 50mins'}
              lessons={55}
              thumbnail={courseThrT}
              tutor={'claretta mason'}
              price={'$55.00'}
            />
            <CourseCard
              coursePreview={courseFour}
              tag={'development'}
              metric={'4.7k'}
              rating={'32.7k+'}
              title={'introduction to javascript, git & GitHub'}
              duration={'30hrs 50mins'}
              lessons={22}
              thumbnail={courseFourT}
              tutor={'Jessica duke'}
              price={'$45.00'}
            />
            <CourseCard
              coursePreview={courseFive}
              tag={'marketing'}
              metric={'4.7k'}
              rating={'4.7k+'}
              title={'introduction to outroom  marketing analysis'}
              duration={'33hrs 50mins'}
              lessons={26}
              thumbnail={courseFiveT}
              tutor={'Samuel Jacobs'}
              price={'$25.00'}
            />
            <CourseCard
              coursePreview={courseSix}
              tag={'marketing'}
              metric={'4.7k'}
              rating={'15.7k+'}
              title={'introduction to live  marketing analysis'}
              duration={'10hrs 50mins'}
              lessons={32}
              thumbnail={courseSixT}
              tutor={'adam smith'}
              price={'$25.00'}
            />
          </div>
        <div className="mt-4 lg:mt-10">
          <button className="hidden mx-auto lg:block btn-primary">explore all courses</button>
          <button className="block mx-auto lg:hidden btn-primary">view courses</button>
        </div>
        </div>
      </div>
    </Container>
  )
}

export default CoursesSection