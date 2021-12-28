import * as React from 'react';

interface Props {
  title: string;
  description: string;
}

export default function Hero({ title, description }: Props) {
  // Put Header or Footer Here
  return (
    <section className="bg-blue-800 h-96 w-full" id="landing">
      <div className="grid grid-cols-1 max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center pl-2 text-white md:justify-end">
          <div className="my-auto p-4 w-full" id="landing-block">
            <h2 className="font-medium leading-tight mt-16 pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              {title}
            </h2>
            <h3 className="font-light text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
