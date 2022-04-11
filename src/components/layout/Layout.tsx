import * as React from 'react';

import Footer from './Footer';
import Navbar2 from './Navbar2';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar2 />
      {children}
      <Footer />
    </>
  );
}
