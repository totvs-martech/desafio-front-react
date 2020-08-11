import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components';
// import { Button } from "@monorepo/components/Button";
// import { Card } from '@monorepo/components/Card';
import ListCards from '../components/ListCards';
import Navbar from '../components/Navbar';
import WrapperCss from '../components/WrapperCss'
import Pagination from '../components/Pagination';

import { pageHeroes } from '../store/actions/heroes';

import { wrapper } from '../store';

const Home = _ => {
  const { limit, total, paginate } = useSelector((state) => state).heroes;

  const dispatch = useDispatch();
  const page = pageNumber => {
    dispatch(pageHeroes(pageNumber));
  }

  return (
    <div>
        <Head>
          <title>Home</title>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta property="og:Home" content="Home" key="Home" />
        </Head>
        <Navbar/>
        <WrapperCss>
          <ListCards/>
          <Pagination 
           offset={ limit }
           total={ total }
           paginate={ page }
            />
        </WrapperCss>
    </div>
  )
}

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(tickClock(false));

//   if (!store.getState().placeholderData) {
//     store.dispatch(loadData());
//     store.dispatch(END);
//   }

//   await store.sagaTask.toPromise();
// })

export default Home;