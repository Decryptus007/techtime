import React from 'react'
import Container from './Container'

function FaqSection() {
  return (
    <div >
      <Container>
        <div className="py-[40px] relative lg:py-[86px]">
          {/* Absolutes */}
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[2%] -right-3 lg:top-[10%] lg:right-4'>
            <path d="M14 24.5769C6.824 24.5769 1 19.2661 1 12.7223C1 6.17855 6.824 0.867676 14 0.867676C21.176 0.867676 27 6.17855 27 12.7223C27 19.2661 21.176 24.5769 14 24.5769ZM14 4.80341C9.216 4.80341 5.316 8.3598 5.316 12.7223C5.316 17.0848 9.216 20.6412 14 20.6412C18.784 20.6412 22.684 17.0848 22.684 12.7223C22.684 8.3598 18.784 4.80341 14 4.80341Z" fill="#004DB3" stroke="#9143FD" strokeWidth="0.26" />
          </svg>
          <svg width="69" height="20" viewBox="0 0 69 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[15%] -left-10 lg:top-[50%] lg:left-4'>
            <path d="M6.2 19.1709L-7 3.92428L-4.9 2.42012L6.2 15.2054L18.35 1.18945L30.5 15.2054L42.65 1.18945L54.8 15.2054L65.9 2.42012L68 3.92428L54.8 19.1709L42.65 5.15495L30.5 19.1709L18.35 5.15495L6.2 19.1709Z" fill="#FFBE4E" stroke="#FFBE4E" strokeWidth="0.749882" />
          </svg>
          <svg width="70" height="350" viewBox="0 0 70 350" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[2%] -right-3 hidden lg:block lg:top-[10%] lg:right-4' xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect y="-31" width="293" height="381" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1476_764" transform="scale(0.00555556 0.00262467)" />
              </pattern>
              <image id="image0_1476_764" width="180" height="381" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAF9CAYAAACtXUL6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZTM5Yzk0NC1kNmE4LWRkNDMtYTU4Yi1kN2NiYmJhODM3MjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjdGRkY5QjVGRkIxMTFFOUJBRDdDM0I0NTc3NTYwNDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjdGRkY5QjRGRkIxMTFFOUJBRDdDM0I0NTc3NTYwNDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBkMGIxNGY5LTJkYTgtMTU0OS05NWU1LWJkOTY0MjU2OTY0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZTM5Yzk0NC1kNmE4LWRkNDMtYTU4Yi1kN2NiYmJhODM3MjkiLz4gPC9y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" />
            </defs>
          </svg>

          <div className="w-full max-w-[1037px] mx-auto">
            <h2 className="text-center lg:max-w-[1203px]">
              frequently asked questions
            </h2>
            <span className="block text-center mx-auto w-[282.11px] lg:w-[743px]">
              high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image
            </span>
            <div className="mt-6 lg:mt-[82px]">
              <p className="text-[14px] font-[900] text-start text-primary leading-[19px] lg:leading-[32px] lg:text-[24px]">is there a free trial available?</p>
              <span className="text-start block mt-[6.08px] lg:mt-[16px]">
                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.
              </span>
            </div>
            <div className="mt-6 lg:mt-8">

              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                  <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span className="text-[14px] font-satoshi font-[900] text-[#000F24] leading-[19px] lg:leading-[32px] lg:text-[24px]">can i change my plan later?</span>
                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                  <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span className="text-[14px] font-satoshi font-[900] text-[#000F24] leading-[19px] lg:leading-[32px] lg:text-[24px]">are the courses lifetime?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                  <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                    <span className="text-[14px] font-satoshi font-[900] text-[#000F24] leading-[19px] lg:leading-[32px] lg:text-[24px]">do i get certified after taking courses?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-4">
                  <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                    <span className="text-[14px] font-satoshi font-[900] text-[#000F24] leading-[19px] lg:leading-[32px] lg:text-[24px]">how do i reach out to mentors?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-5">
                  <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                    <span className="text-[14px] text-start font-satoshi font-[900] text-[#000F24] leading-[19px] lg:leading-[32px] lg:text-[24px]">do we get job ready after taking courses?</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FaqSection