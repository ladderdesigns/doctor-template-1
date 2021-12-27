import * as React from 'react';

import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function OurServices() {
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
        </section>
      </main>
    </>
  );
}
