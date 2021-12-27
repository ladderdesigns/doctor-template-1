import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

import Hero from '../components/Hero';
import OurTeam from '../components/OurTeam';

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
          <Background image="pattern.png" width={300} height={400}>
            <OurTeam />
          </Background>
        </section>
      </main>
    </>
  );
}
