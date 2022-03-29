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

            <div className="bg-white pt-16 lg:py-24">
              <div className="bg-red-800 pb-16 lg:pb-0 lg:relative lg:z-10">
                <div className="lg:gap-8 lg:grid lg:grid-cols-3 lg:max-w-7xl lg:mx-auto lg:px-8">
                  <div className="relative lg:-my-8">
                    <div
                      aria-hidden="true"
                      className="absolute bg-white h-1/2 inset-x-0 top-0 lg:hidden"
                    />
                    <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                      <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                        <img
                          className="object-cover lg:h-full lg:w-full"
                          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="max-w-md mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                        <div>
                          <svg
                            className="h-12 opacity-25 text-white w-12"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="font-medium mt-6 text-2xl text-white">
                            Dr. Chandramouli and his staff were all very
                            friendly and helpful. I especially loved how Dr.
                            Chandramouli really took his time to explain my
                            conditions with me as well as my treatment options.
                            I had a great visit and his demeanor has really put
                            me at ease. I highly reccomend his services.
                          </p>
                        </div>
                        <footer className="mt-6">
                          <p className="font-medium text-base text-white">
                            - A valued patient
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
