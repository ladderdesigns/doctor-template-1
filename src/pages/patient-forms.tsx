import { Disclosure } from '@headlessui/react';
import { DownloadIcon, SearchIcon } from '@heroicons/react/outline';
import * as React from 'react';

import Seo from '@/components/Seo';

import Background from '../components/Background';
import Hero from '../components/Hero';

export default function PatientForms() {
  const items = [
    {
      id: 0,
      name: 'new-patient-forms',
      href: '/patient-forms/new-patient-forms.pdf',
    },
    {
      id: 1,
      name: 'cardiac-catherization-instructions',
      href: '/patient-forms/cardiac-catherization-instructions.pdf',
    },
    {
      id: 2,
      name: 'nuclear-stress-test',
      href: '/patient-forms/nuclear-stress-test.pdf',
    },
    {
      id: 3,
      name: 'office-directions',
      href: '/patient-forms/office-directions.pdf',
    },
  ];

  const items2 = [
    {
      id: 0,
      name: 'Medtronic - The Carelink Network (patient portal) ',
      href: 'https://www.medtronic.com/us-en/healthcare-professionals/products/cardiac-rhythm/managing-patients/information-systems/carelink-network.html',
    },
    {
      id: 1,
      name: 'Abbot (patient portal)',
      href: 'https://www.abbott.com/',
    },
  ];

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className="">
          <Hero
            title="Patient Forms"
            description="Redding’s premier cardiology services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="py-16 w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white divide-gray-200 divide-y-2 max-w-3xl mx-auto p-6 relative rounded-xl shadow-sm">
                  <h2 className="font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    Download forms below:
                  </h2>
                  <dl className="divide-gray-200 divide-y mt-6 space-y-6">
                    {items.map((file) => (
                      <Disclosure as="div" key={file.id} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg" id={file.name}>
                              <Disclosure.Button className="flex items-start justify-between text-gray-400 text-left w-full">
                                <span className="font-medium text-gray-900">
                                  {file.name}
                                </span>
                                <span className="flex h-7 items-center ml-6">
                                  <a href={file.href} download>
                                    <button
                                      type="button"
                                      className="bg-blue-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium hover:bg-blue-700 inline-flex items-center leading-4 px-3 py-2 rounded-md shadow-sm text-sm text-white"
                                    >
                                      Download
                                      <DownloadIcon
                                        className="-mr-0.5 h-4 ml-2 w-4"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </a>
                                </span>
                              </Disclosure.Button>
                            </dt>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white divide-gray-200 divide-y-2 max-w-3xl mx-auto p-6 relative rounded-xl shadow-sm">
                  <h2 className="font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    Useful links:
                  </h2>
                  <dl className="divide-gray-200 divide-y mt-6 space-y-6">
                    {items2.map((file) => (
                      <Disclosure as="div" key={file.id} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg" id={file.name}>
                              <Disclosure.Button className="flex items-start justify-between text-gray-400 text-left w-full">
                                <span className="font-medium text-gray-900">
                                  {file.name}
                                </span>
                                <span className="flex h-7 items-center ml-6">
                                  <a href={file.href} download>
                                    <button
                                      type="button"
                                      className="bg-blue-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium hover:bg-blue-700 inline-flex items-center leading-4 px-3 py-2 rounded-md shadow-sm text-sm text-white"
                                    >
                                      <span className="hidden md:block">
                                        {' '}
                                        Visit Website{' '}
                                      </span>
                                      <span className="block md:hidden">
                                        Website
                                      </span>
                                      <SearchIcon
                                        className="-mr-0.5 h-4 ml-2 w-4"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </a>
                                </span>
                              </Disclosure.Button>
                            </dt>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
