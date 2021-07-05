import Head from "next/head";
import type { AppProps } from 'next/app';

import '../styles/bootstrap/bootstrap.css';
import '../styles/global.scss'; // SASS
import '../styles/global'; // Styled Components

const pageTitle = 'TOTVS STORE - Marvel';
const description = 'Access information about Marvel\'s vast library of comics from anywhere - from what\'s to come until 70 years ago.'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />

        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />

        <title>{pageTitle}</title>

        {/* Bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp

