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
import {useContext, useState} from "react";
import {EventContext} from "@/app/libs/context";
import nextConfig from "../../next.config.mjs";


export default function Home() {
  // State to keep track of accordion state
  const [accordionOpen, setAccordionOpen] = useState('');
  const [events, setEvents] = useContext(EventContext)
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
  console.log(nextConfig)
  return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        {nextConfig['server']}
        <section className="banner">
          <div className="relative">
            <Image width={2000} height={1000} src={'/images/BannerImg.jpg'} className="max-h-screen"
                   alt="image description"/>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
              Al jouw evenementen op een plek
            </h1>
          </div>
        </section>
        <section className="upcoming-events pt-20">
          <h1 className=" flex justify-center pt-6 pb-6 text-3xl font-bold"> Opkomende evenementen</h1>
          <section className="event-cards flex flex-row">
            {events.sort((a,b) => a.begin_date > b.begin_date).slice(0,3).map(ev =>
                <div className="pr-7">
                  <div
                      className="p- max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={"/event/" + ev.id} >
                      <img className="rounded-t-lg" src="/docs/images/blog/BannerImg.jpg" alt=""/>
                    </a>
                    <div className="p-5">
                      <a href={"/event/" + ev.id}>
                        <Image width={1000} height={1000} src={'http://lands-events-laravel.test/storage/' + ev.image}
                             className=""
                             alt="image description"/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ev.title}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ev.description}</p>
                    </div>
                  </div>
                </div>
            )}
          </section>
          <div className=" flex justify-center  pt-4">
            <button type="button"
                    className=" focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Bekijk
              Meer
            </button>
          </div>
        </section>

        {nextConfig.server}
        <section className="image-sliderc max-w-screen-2xl">
          <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{clickable: true}}
              scrollbar={{draggable: false}}
          >
            {events.map(ev => <SwiperSlide><Image width={1000} height={1000} src={'http://lands-events-laravel.test/storage/' + ev.image} className={"max-w-100"}/></SwiperSlide>)}
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'} className={"max-w-100"}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'} className={"max-w-100"}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'} className={"max-w-100"}/></SwiperSlide>
            <SwiperSlide><Image width={1000} height={1000} src={'/images/screenshot (103).png'} className={"max-w-100"}/></SwiperSlide>
          </Swiper>
        </section>

        <section className="FAQ pt-20">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-1')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-1'}
                  aria-controls="accordion-collapse-body-1"
              >
                <span>Hoe kan ik mij aanmelden als beheerder om evenementen en nieuwsberichten te plaatsen op de Landstede-website?</span>
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
              <p className="mb-2 text-gray-500 dark:text-gray-400">Neem contact op met de beheerders van de website om toegang te krijgen tot het beheerderspaneel en om de benodigde informatie te ontvangen voor aanmelding.</p>
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
                  aria-controls="accordion-collapse-body-3">
                <span>Hoe kan ik meer informatie krijgen over een specifiek evenement dat op de website wordt vermeld?</span>
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
            <div id="accordion-collapse-body-3"
                 className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-3' ? 'block' : 'hidden'}`}
                 aria-labelledby="accordion-collapse-heading-3">
              <p className="mb-2 text-gray-500 dark:text-gray-400">U kunt rechtstreeks contact opnemen met de organisatoren van het evenement voor meer informatie. De contactgegevens worden vaak vermeld op de evenementenpagina.</p>
            </div>
            <h2 id="accordion-collapse-heading-4">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-4')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-4'}
                  aria-controls="accordion-collapse-body-4">
                <span>Worden er ook online evenementen of activiteiten op de website geplaatst, of zijn het alleen fysieke bijeenkomsten?</span>
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
            <div id="accordion-collapse-body-4"
                 className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-4' ? 'block' : 'hidden'}`}
                 aria-labelledby="accordion-collapse-heading-4">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Ja, naast fysieke evenementen worden ook online evenementen en activiteiten op de website geplaatst, indien relevant voor de Landstede-gemeenschap.</p>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion('accordion-collapse-body-5')}
                  aria-expanded={accordionOpen === 'accordion-collapse-body-5'}
                  aria-controls="accordion-collapse-body-5">
                <span>Zijn de evenementen op de website gratis toegankelijk voor studenten en/of het publiek?</span>
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
            <div id="accordion-collapse-body-5"
                 className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen === 'accordion-collapse-body-5' ? 'block' : 'hidden'}`}
                 aria-labelledby="accordion-collapse-heading-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Ja, de meeste evenementen op de website van Landstede zijn gratis toegankelijk voor zowel studenten als het publiek. Eventuele kosten worden duidelijk vermeld op de evenementenpagina.</p>
            </div>
          </div>
        </section>
      </main>
  );
}
