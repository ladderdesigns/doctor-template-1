import * as React from 'react';

import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function ContactUs() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Hero title="404" description="Page not found" />
        </section>
      </main>
    </>
  );
}
