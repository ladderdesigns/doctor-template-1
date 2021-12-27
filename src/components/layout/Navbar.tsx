/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex h-24 justify-between relative">
              <div className="absolute flex inset-y-0 items-center left-0 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XIcon className="block w-6 h-6" aria-hidden="true" />
                    <p> XIcon here</p>
                  ) : (
                    // <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    <p> MenuIcon here</p>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden items-center sm:flex sm:ml-6 sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/our-services"
                    className="border-b-2 border-indigo-500 font-medium inline-flex items-center pt-1 px-1 text-gray-900 text-sm"
                  >
                    Our Services
                  </a>
                  <a
                    href="/patient-resources"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    Patient Resources
                  </a>
                  <img
                    src={'/logo.svg'}
                    alt="Chandramouli logo"
                    className="h-12 w-12"
                  />
                  <a
                    href="/about-us"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    About Us
                  </a>
                  <a
                    href="/contact-us"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="absolute flex inset-y-0 items-center pr-2 right-0 sm:inset-auto sm:ml-6 sm:pr-0 sm:static">
                <button
                  type="button"
                  className="bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-gray-500 p-1 rounded-full text-gray-400"
                >
                  <span className="sr-only">View notifications</span>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pb-4 pt-2 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/our-services"
                className="bg-indigo-50 block border-indigo-500 border-l-4 font-medium pl-3 pr-4 py-2 text-base text-indigo-700"
              >
                Our Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/patient-resources"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-gray-500"
              >
                Patient Resources
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about-us"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-gray-500"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-gray-500"
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
