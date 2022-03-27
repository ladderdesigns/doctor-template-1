import { Disclosure } from '@headlessui/react';
import { DownloadIcon } from '@heroicons/react/outline';
import * as React from 'react';

import Seo from '@/components/Seo';

import Background from '../components/Background';
import Hero from '../components/Hero';

export default function PatientResources() {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Hero
            title="Patient Resources"
            description="Redding’s premier cardiology services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="py-16 w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white divide-gray-200 divide-y-2 max-w-3xl mx-auto p-6 relative rounded-xl">
                  <h2 className="font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    Download forms below:
                  </h2>
                  <dl className="divide-gray-200 divide-y mt-6 space-y-6">
                    {items.map((service) => (
                      <Disclosure as="div" key={service.id} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex items-start justify-between text-gray-400 text-left w-full">
                                <span className="font-medium text-gray-900">
                                  {service.id}
                                </span>
                                <span className="flex h-7 items-center ml-6">
                                  <button
                                    type="button"
                                    className="bg-blue-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium hover:bg-blue-700 inline-flex items-center leading-4 px-3 py-2 rounded-md shadow-sm text-sm text-white"
                                  >
                                    Button text
                                    <DownloadIcon
                                      className="-mr-0.5 h-4 ml-2 w-4"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <p className="text-base text-gray-500">
                                {service.id}
                              </p>
                            </Disclosure.Panel>
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
