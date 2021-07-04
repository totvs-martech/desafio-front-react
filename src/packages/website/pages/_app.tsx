import type { AppProps } from 'next/app'
import { ThemeProvider, theme } from '@monorepo/components'

import GlobalStyle from '../styles/global'
import Layout from '../layouts'

import { storeWrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}
export default storeWrapper.withRedux(MyApp);

