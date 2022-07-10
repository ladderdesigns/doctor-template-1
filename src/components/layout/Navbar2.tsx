/* eslint-disable @next/next/no-html-link-for-pages */

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar2() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <div className="h-12 hidden w-auto lg:block">
                    <Link href="/">
                      <a>
                        <Image
                          src="/logo2.svg"
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="block h-12 w-auto lg:hidden">
                    <Link href="/">
                      <a>
                        <Image
                          src="/logo2.svg"
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:space-x-8 lg:flex">
                  {/* Current: "border-red-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href="/our-services">
                    <a
                      href="our-services"
                      className="border-b-2 focus:border-red-500 focus:text-gray-700 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-md"
                    >
                      Our Services
                    </a>
                  </Link>
                  {/* TODO: color should remain the same when you click on the Navbar links */}
                  <Link href="/patient-forms">
                    <a
                      href="/patient-forms"
                      className="border-b-2 border-transparent focus:border-red-500 focus:text-gray-700 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-md"
                    >
                      Patient Forms
                    </a>
                  </Link>
                  <Link href="/about-us">
                    <a
                      href="about-us"
                      className="border-b-2 border-transparent focus:border-red-500 focus:text-gray-700 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-md"
                    >
                      About Us
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      href="contact"
                      className="border-b-2 border-transparent focus:border-red-500 focus:text-gray-700 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-md"
                    >
                      Contact
                    </a>
                  </Link>
                  <Link href="/contact/#faq">
                    <a
                      href="contact/#faq"
                      className="border-b-2 border-transparent focus:border-red-500 focus:text-gray-700 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-md"
                    >
                      FAQ
                    </a>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pb-3 pt-2 space-y-1">
              {/* Current: "bg-red-50 border-red-500 text-red-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="our-services"
                className="block border-l-4 focus:bg-red-50 focus:border-red-500 focus:text-red-700 font-medium pl-3 pr-4 py-2 text-base text-gray-500"
              >
                Our Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="patient-forms"
                className="block border-l-4 focus:bg-red-50 focus:border-red-500 focus:text-red-700 font-medium pl-3 pr-4 py-2 text-base text-gray-500"
              >
                Patient Forms
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="about-us"
                className="block border-l-4 focus:bg-red-50 focus:border-red-500 focus:text-red-700 font-medium pl-3 pr-4 py-2 text-base text-gray-500"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact"
                className="block border-l-4 focus:bg-red-50 focus:border-red-500 focus:text-red-700 font-medium pl-3 pr-4 py-2 text-base text-gray-500"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact/#faq"
                className="block border-l-4 focus:bg-red-50 focus:border-red-500 focus:text-red-700 font-medium pl-3 pr-4 py-2 text-base text-gray-500"
              >
                FAQ
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
