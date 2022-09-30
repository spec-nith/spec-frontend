import React,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "./hero.css";
import { Link } from "gatsby";
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const image = "images/bg2.png";
export default function Example() {
  return (
    <React.Fragment>

    
    <div className="relative overflow-hidden bg-black pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10  pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        

          

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="inline HeroText">Welcome to the </span><br/>
                <span className="text-indigo-600 inline HeroText">Home Page</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/gallery"
                    className="flex w-full items-center justify-center rounded-md border border-transparent gradientButton px-8 py-3 text-base font-medium text-white hover:scale-105 md:py-4 md:px-10 md:text-lg"
                  >
                    Gallery
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 gradientButton rounded-md hover:scale-105" style={{padding: "2px"}}>
                  <Link
                    to="/team"
                    className="flex w-full items-center justify-center rounded-md bg-black px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg"
                  >
                    Our Team
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="hidden lg:flex object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={image}
          alt=""
        />
      </div>
    </div>
    </React.Fragment>
  )
}
