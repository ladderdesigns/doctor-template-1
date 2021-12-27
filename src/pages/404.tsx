import * as React from 'react';

import Seo from '@/components/Seo.tsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle="Not Found" />

      <main>
        <section className="bg-white">
          <div className="flex flex-col items-center justify-center layout min-h-screen text-black text-center">
            <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
          </div>
        </section>
      </main>
    </>
  );
}
