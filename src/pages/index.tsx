import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

export default function Index() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="">
          <Background image="pattern.png" width={300} height={400}>
            <div className="h-screen w-screen"></div>
          </Background>
        </section>
      </main>
    </>
  );
}
