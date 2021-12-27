import * as React from 'react';

import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Hero
            title="Contact"
            description="Redding’s premier cardiology services"
          />
        </section>
      </main>
    </>
  );
}
