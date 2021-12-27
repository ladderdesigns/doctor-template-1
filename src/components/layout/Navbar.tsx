/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-800 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex h-28 justify-between relative">
              <div className="absolute flex inset-y-0 items-center left-0 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={'inline-flex'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={'inline-flex'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden items-center sm:flex sm:space-x-24">
                  <Link href="/our-services">
                    <a className="border-white focus:font-bold focus:underline hover:text-gray-300 inline-flex items-center pt-1 px-1 text-md text-white">
                      Our Services
                    </a>
                  </Link>

                  <Link href="/patient-resources">
                    <a className="border-transparent focus:font-bold focus:underline hover:border-gray-300 hover:text-gray-300 inline-flex items-center pt-1 px-1 text-md text-white">
                      Patient Resources
                    </a>
                  </Link>
                  <div>
                    <Link href="/">
                      <a className="hover:opacity-75">
                        <Image
                          src="/logo.svg"
                          alt="Chandramouli logo"
                          width={75}
                          height={75}
                        ></Image>
                      </a>
                    </Link>
                  </div>
                  <Link href="/about-us">
                    <a className="border-transparent focus:font-bold focus:underline hover:border-gray-300 hover:text-gray-300 inline-flex items-center pt-1 px-1 text-md text-white">
                      About Us
                    </a>
                  </Link>

                  <Link href="/contact-us">
                    <a className="border-transparent focus:font-bold focus:underline hover:border-gray-300 hover:text-gray-300 inline-flex items-center pt-1 px-1 text-md text-white">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pb-4 pt-2 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/our-services"
                className="bg-indigo-50 block border-indigo-500 border-l-4 font-medium pl-3 pr-4 py-2 text-base text-white"
              >
                Our Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/patient-resources"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-white"
              >
                Patient Resources
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about-us"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-white"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-white"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
