import { AppProps } from 'next/app';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
