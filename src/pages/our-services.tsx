import * as React from 'react';

import Seo from '@/components/Seo';

import Background from '../components/Background';
import CenteredAccordion from '../components/CenteredAccordion';
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
          <Background image="pattern.png" width={300} height={400}>
            <CenteredAccordion />
          </Background>
        </section>
      </main>
    </>
  );
}
