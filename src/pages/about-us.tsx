import * as React from 'react';

import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function AboutUs() {
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
        </section>
      </main>
    </>
  );
}
