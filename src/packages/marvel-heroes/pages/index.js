import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { layout } from 'styled-system';

import Card from '../components/Card';
import ListCards from '../components/ListCards';
import Navbar from '../components/Navbar';
import WrapperCss from '../components/WrapperCss'
import Pagination from '../components/Pagination';

import { pageHeroes, getHeroes } from '../store/actions/heroes';
import { setHeroesPage } from '../store/actions/pagination';

const Home = _ => {
  const store = useSelector((state) => state);
  const { heroesList, limit, total } = store.heroes;
  const { currentPageHeroes } = store.pagination;
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const page = pageNumber => {
    dispatch(setHeroesPage(pageNumber));
    dispatch(pageHeroes(pageNumber * limit));
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
           currentPage={ currentPageHeroes }
            />
        </WrapperCss>
    </div>
  )
}

export default Home;

const LinkElement = styled.a`
  background: #1f1f1f;
  cursor: pointer;
  position: relative;
  max-height: 280px;
  ${layout};
`;