import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../src/styles/globals.css';
import { components } from '../src/storyblok/components';

storyblokInit({
  accessToken:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_STORYBLOK_ACCESS_TOKEN
      : process.env.NEXT_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hydranet: Bringing Bitcoin to DeFi</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
