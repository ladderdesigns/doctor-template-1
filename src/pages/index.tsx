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
                  <h3 className="absolute bottom-1 font-light left-4 text-lg text-white md:bottom-5 md:left-8 md:text-2xl lg:text-3xl">
                    {' '}
                    Redding&apos;s Premier Cardiology Services{' '}
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-transparent w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white grid grid-cols-1 h-24 p-4 relative rounded-xl sm:grid-cols-2">
                  <div className=""> Lucas </div>
                  <div className=""> Jacob </div>
                </div>
              </div>
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white h-24 p-4 relative rounded-xl">
                  Lucas
                </div>
              </div>
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white h-24 p-4 relative rounded-xl">
                  Lucas
                </div>
              </div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
