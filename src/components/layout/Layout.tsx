import * as React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
