import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Background from '../components/Background';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

interface Props {
  employees: [
    {
      data: {
        name: string;
        role: string;
        id: number;
        slug: string;
        creds: string;
        bio: string;
        shortbio: string;
        img: string;
        active: boolean;
      };
    },
  ];
}

export default function AboutUs({ employees }: Props) {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Hero
            title="About Us"
            description="Redding’s premier cardiology services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="my-auto py-16 rounded-xl shadow-xl w-full">
              <div className="bg-white mx-12 px-4 py-8 relative sm:max-w-3xl sm:px-6 md:mx-auto lg:max-w-5xl lg:px-8">
                <div className="space-y-12 lg:gap-8 lg:grid lg:grid-cols-3 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
                      Our team
                    </h2>
                    <p className="text-gray-500 text-xl">
                      Nulla quam felis, enim faucibus proin velit, ornare id
                      pretium. Augue ultrices sed arcu condimentum vestibulum
                      suspendisse. Volutpat eu faucibus vivamus eget bibendum
                      cras.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul
                      role="list"
                      className="space-y-12 sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:gap-x-8"
                    >
                      {employees.map((employee, key) => (
                        <li key={key}>
                          <div
                            className={
                              employee.data.id == 0 ? 'space-y-8' : 'space-y-4'
                            }
                          >
                            <div className="aspect-h-2 aspect-w-3">
                              <Image
                                src={employee.data.img}
                                layout="fill"
                                alt={employee.data.name}
                                objectFit="cover"
                              />
                            </div>
                            <div className="font-medium leading-6 space-y-1 text-lg">
                              <h3 className="text-2xl">{employee.data.name}</h3>
                              <p className="text-gray-600">
                                {employee.data.role}
                              </p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-500">
                                {employee.data.shortbio}
                              </p>
                              {employee.data.bio && (
                                <Link href={'/about-us/' + employee.data.slug}>
                                  <a className="text-blue-500 underline">
                                    Read more
                                  </a>
                                </Link>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
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
  const files = fs.readdirSync(`${process.cwd()}/public/content/employees`);

  const employees = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/public/content/employees/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace('.md', ''),
      data,
    };
  });

  return {
    props: {
      employees,
    },
  };
}
