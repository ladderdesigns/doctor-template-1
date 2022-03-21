/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                  <img
                    className="h-8 hidden w-auto lg:block"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="our-services"
                    className="border-b-2 border-blue-500 font-medium inline-flex items-center pt-1 px-1 text-gray-900 text-sm"
                  >
                    Our Services
                  </a>
                  <a
                    href="patient-resources"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    Patient Resources
                  </a>
                  <a
                    href="about-us"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    About Us
                  </a>
                  <a
                    href="contact"
                    className="border-b-2 border-transparent font-medium hover:border-gray-300 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-gray-500 text-sm"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="pb-3 pt-2 space-y-1">
              {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="our-services"
                className="bg-blue-50 block border-blue-500 border-l-4 font-medium pl-3 pr-4 py-2 text-base text-blue-700"
              >
                Our Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="patient-resources"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-gray-500"
              >
                Patient Resources
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="about-us"
                className="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 text-base text-gray-500"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact"
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
