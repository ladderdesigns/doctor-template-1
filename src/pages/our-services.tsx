import * as React from 'react';

import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-white h-screen">
          <Hero />
        </section>
      </main>
    </>
  );
}
