import '@/styles/tailwind.css';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
