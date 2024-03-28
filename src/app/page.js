'use client';
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";


export default function Home() {
  // State to keep track of accordion state
  const [accordionOpen, setAccordionOpen] = useState('');

  // Function to toggle accordion
  const toggleAccordion = (accordionId) => {
    if (accordionOpen === accordionId) {
      // If clicked accordion is already open, close it
      setAccordionOpen('');
    } else {
      // Otherwise, open the clicked accordion
      setAccordionOpen(accordionId);
    }
  };
  return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <section className="banner">
          <div className="relative">
            <Image width={2000} height={1000} src={'/images/BannerImg.jpg'} className="" alt="image description"/>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
              Al jouw evenementen op een plek
            </h1>
          </div>
        </section>

        <section className="upcoming-events">
          <h1 className=" flex justify-center pt-6 pb-6 text-xl font-bold"> Opkomende evenementen</h1>
          <section className="event-cards flex flex-row">
            <div className="pr-7">
              <div
                  className="p- max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/BannerImg.jpg" alt=""/>
                </a>
                <div className="p-5">
                  <a href="#">
                    <Image width={1000} height={1000} src={'/images/screenshot (103).png'} className=""
                           alt="image description"/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                      technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </div>
            <div className="pr-7">
              <div
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
                </a>
                <div className="p-5">
                  <a href="#">
                    <Image width={1000} height={1000} src={'/images/screenshot (103).png'} className=""
                           alt="image description"/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                      technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </div>
            <div className="">
              <div
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
                </a>
                <div className="p-5">
                  <a href="#">
                    <Image width={1000} height={1000} src={'/images/screenshot (103).png'} className=""
                           alt="image description"/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                      technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </div>
          </section>
          <div className=" flex justify-center  pt-4">
            <button type="button"
                    className=" focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Bekijk
              Meer
            </button>
          </div>
        </section>

        <section className="image-slider max-w-40">
          <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{clickable: true}}
              scrollbar={{draggable: false}}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'}/></SwiperSlide>
          </Swiper>
        </section>

        <section className="FAQ">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-1')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-1'}
                  aria-controls="accordion-collapse-body-1"
              >
                <span>Zijn de evenementen op de website alleen voor studenten of kunnen anderen ook deelnemen?</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen === 'accordion-collapse-body-1' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1"
                 className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-1' ? 'block' : 'hidden'}`}
                 aria-labelledby="accordion-collapse-heading-1">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                websites even faster with components on top of Tailwind CSS.</p>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-2')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-2'}
                  aria-controls="accordion-collapse-body-2">
                <span>Zijn de evenementen op de website alleen voor studenten of kunnen anderen ook deelnemen?</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen === 'accordion-collapse-body-2' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2"
                 className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-2' ? 'block' : 'hidden'}`}
                 aria-labelledby="accordion-collapse-heading-2">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                websites even faster with components on top of Tailwind CSS.</p>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-3')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-3'}
                  aria-controls="accordion-collapse-body-3"
              >
                <span>Zijn de evenementen op de website alleen voor studenten of kunnen anderen ook deelnemen?</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen === 'accordion-collapse-body-3' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
              <div
                  className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-3' ? 'block' : 'hidden'}`}
                  aria-labelledby="accordion-collapse-heading-3">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                  components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                  websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-4')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-4'}
                  aria-controls="accordion-collapse-body-4"
              >
                <span>Zijn de evenementen op de website alleen voor studenten of kunnen anderen ook deelnemen?</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen === 'accordion-collapse-body-4' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
              <div
                  className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-4' ? 'block' : 'hidden'}`}
                  aria-labelledby="accordion-collapse-heading-4">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                  components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                  websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-5')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-5'}
                  aria-controls="accordion-collapse-body-5"
              >
                <span>Zijn de evenementen op de website alleen voor studenten of kunnen anderen ook deelnemen?</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen === 'accordion-collapse-body-5' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
              <div
                  className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-5' ? 'block' : 'hidden'}`}
                  aria-labelledby="accordion-collapse-heading-5"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                  components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                  websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
