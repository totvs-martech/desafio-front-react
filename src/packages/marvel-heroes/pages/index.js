import Head from 'next/head'
// import { Button } from "@monorepo/components/Button";
// import { Card } from '@monorepo/components/Card';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

import { Provider } from 'react-redux';
import store from '../store';

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <Head>
          <title>Home</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <Card/>

      </Provider>
    </div>
  )
}
