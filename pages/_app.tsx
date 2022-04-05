import '../src/styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; // You can also use <link> for styles
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
