import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { flexbox, layout } from 'styled-system';
// import { Button } from "@monorepo/components/Button";
// import { Card } from '@monorepo/components/Card';

import Card from '../components/Card';
import ListCards from '../components/ListCards';
import Navbar from '../components/Navbar';
import WrapperCss from '../components/WrapperCss'
import Pagination from '../components/Pagination';

import { pageHeroes, getHeroes } from '../store/actions/heroes';


import { wrapper } from '../store';

const Home = _ => {
  const { heroesList } = useSelector((state) => state).heroes;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const { limit, total, paginate } = useSelector((state) => state).heroes;
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
          <ListCards>
            { heroesList.map(heroe => (
              <Link key={ heroe.id } href="/heroe/[id]" as={`/heroe/${heroe.id}`}>
                <LinkElement width={[ 1, 1/2, 1/2, 1/4, 1/4 ]}>
                  <Card heroe={heroe} hoverColor='transparent'/>
                </LinkElement>
              </Link>
              )) 
            }
          </ListCards>
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

const LinkElement = styled.a`
  background: #1f1f1f;
  cursor: pointer;
  position: relative;
  max-height: 280px;
  ${layout};
`;