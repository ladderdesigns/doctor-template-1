import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import React from 'react';

import Background from '../../components/Background';
import Hero from '../../components/Hero';
import Seo from '../../components/Seo';

interface Props {
  employee: {
    name: string;
    role: string;
    id: number;
    creds: string;
    bio: string;
    shortbio: string;
    img: string;
    active: boolean;
  };
}

type NextGetStaticPropsCtx = {
  params: {
    id: string;
  };
  preview?: boolean;
};

export default function AboutUs({ employee }: Props) {
  return (
    <>
      <Seo templateTitle={employee.name} />

      <main>
        <section className="">
          <Hero
            title="About Us"
            description="Redding’s Premier Cardiology Services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="my-auto px-4 py-16 w-full">
              <div className="bg-white max-w-md mx-auto px-4 py-8 relative rounded-xl shadow-sm sm:max-w-3xl sm:px-6 md:mx-auto lg:max-w-5xl lg:px-8">
                <div className="space-y-12 lg:gap-8 lg:grid lg:grid-cols-3 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
                      Our team
                    </h2>
                    <p className="text-gray-600 text-xl">
                      Our mission is to improve cardiac health through
                      integrated and compassionate patient care. Come let our
                      family take care of yours.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul
                      role="list"
                      className="space-y-12 sm:gap-x-6 sm:gap-y-12 sm:grid sm:space-y-0 lg:gap-x-8"
                    >
                      <li>
                        <div className="space-y-4">
                          <div className="aspect-h-2 aspect-w-3">
                            <Image
                              src={'/' + employee.img}
                              layout="fill"
                              alt={employee.name}
                              objectFit="cover"
                            />
                          </div>
                          <div className="font-medium leading-6 space-y-1 text-lg">
                            <h3 className="text-2xl text-black">
                              {employee.name}{' '}
                              <span className="text-base text-gray-600">
                                {employee.creds}
                              </span>
                            </h3>{' '}
                            <p className="text-black text-lg">
                              {employee.role}
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="mb-3 text-gray-600 whitespace-pre-wrap">
                              {employee.bio}
                            </p>
                          </div>
                        </div>
                      </li>
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

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/content/employees`);

  const employees = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/employees/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      params: {
        id: data.slug,
      },
    };
  });

  return {
    paths: employees,
    fallback: false,
  };
}

export async function getStaticProps({ params }: NextGetStaticPropsCtx) {
  const slug = params.id;
  const markdownWithMetadata = fs
    .readFileSync(`${process.cwd()}/content/employees/${slug}.md`)
    .toString();
  const { data } = matter(markdownWithMetadata);

  return {
    props: {
      employee: data,
    },
  };
}
