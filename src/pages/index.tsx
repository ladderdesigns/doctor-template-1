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
            <div className="bg-blue-800 h-96 relative w-screen"></div>
            <div className="absolute bg-red-500 bottom-24 h-[40rem] left-32 max-w-7xl rounded-2xl w-screen">
              <h1 className="absolute bottom-20 font-bold left-24 text-5xl text-white z-20">
                Dr. BV Chandramouli
              </h1>
              <h3 className="absolute bottom-10 font-light left-24 text-4xl text-white z-20">
                Redding’s premier cardiology services
              </h3>
            </div>
            <div className="bg-transparent h-screen w-screen"></div>
          </Background>
        </section>
      </main>
    </>
  );
}
