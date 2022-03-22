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
          <Background image="pattern2.png" width={300} height={300}>
            <div className="bg-red-800 py-16 w-full">
              <div className="-pb-24 max-w-md mx-auto px-4 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative">
                  <div className="absolute bg-gradient-to-t from-black h-full opacity-40 rounded-xl via-gray-500 w-full" />
                  <img
                    src="/team.png"
                    className="object-cover rounded-xl w-full"
                    alt=""
                  />
                  <h2 className="absolute bottom-6 font-bold left-4 text-white text-xl md:bottom-12 md:left-8 md:text-3xl lg:text-5xl">
                    {' '}
                    Dr. B. V. Chandramouli{' '}
                  </h2>
                  <h2 className="absolute bottom-1 font-light left-4 text-lg text-white md:bottom-5 md:left-8 md:text-2xl lg:text-3xl">
                    {' '}
                    Redding&apos;s Premier Cardiology Services{' '}
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-transparent">
              <div className="bg-red-800 h-96 max-w-md mt-24 mx-auto px-4 relative rounded-3xl sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"></div>
              <div className="bg-red-800 h-96 max-w-md mt-24 mx-auto px-4 relative rounded-3xl sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"></div>
              <div className="bg-red-800 h-96 max-w-md mb-24 mt-24 mx-auto px-4 relative rounded-3xl sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"></div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
