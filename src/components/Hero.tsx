import * as React from 'react';

export default function Hero() {
  // Put Header or Footer Here
  return (
    <section className="bg-blue-800 h-96 w-full" id="landing">
      <div className="grid grid-cols-1 max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center text-white md:justify-end">
          <div className="my-auto p-4 w-full" id="landing-block">
            <h2 className="font-bold leading-tight mt-16 pb-2 sm:text-3xl md:text-6xl lg:text-6xl xl:text-7xl">
              Our Work
            </h2>
            <h3 className="text-4xl">Redding’s premier cardiology services.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
