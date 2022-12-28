import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import React, { useEffect } from 'react';

import Background from '../components/Background';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  services: [
    {
      data: {
        name: string;
        id: number;
        shortdesc: string;
        link: string;
        video: string;
        readmore: string;
      };
    },
  ];
}

export default function OurServices({ services }: Props) {
  useEffect(() => {
    services.sort((a, b) => {
      return a.data.id - b.data.id;
    });
  }, []);

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Hero
            title="Our Services"
            description="Redding’s premier cardiology services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="py-16 w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white divide-gray-200 divide-y-2 max-w-3xl mx-auto p-6 relative rounded-xl shadow-sm">
                  <h2 className="font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    What we provide
                  </h2>
                  <dl className="divide-gray-200 divide-y mt-6 space-y-6">
                    {services.map((service) => (
                      <Disclosure
                        as="div"
                        key={service.data.id}
                        className="pt-6"
                      >
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="flex items-start justify-between text-gray-400 text-left w-full">
                                <span className="font-medium text-gray-900">
                                  {service.data.name}
                                </span>
                                <span className="flex h-7 items-center ml-6">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-6 transform w-6',
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="my-2 pr-12">
                              <p className="pb-2 text-base text-gray-500">
                                {service.data.shortdesc}
                              </p>
                              <Link href={service.data.link}>
                                <a className="pr-4 text-blue-500 underline">
                                  Read more
                                </a>
                              </Link>
                              {/* Only show the video link if a video exists for that service */}
                              {service.data.link && (
                                <Link href={service.data.video}>
                                  <a className="text-blue-500 underline">
                                    Watch video
                                  </a>
                                </Link>
                              )}
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

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/public/content/our-services`);

  const services = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/public/content/our-services/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace('.md', ''),
      data,
    };
  });

  return {
    props: {
      services,
    },
  };
}
