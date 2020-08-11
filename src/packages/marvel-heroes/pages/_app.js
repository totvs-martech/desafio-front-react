import { wrapper } from '../store';
import { ThemeProvider } from 'styled-components';
import Global from '../styles/global';

import marvel from '../styles/marvel';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={marvel}>
      <Component {...pageProps} />
      <Global/>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App);