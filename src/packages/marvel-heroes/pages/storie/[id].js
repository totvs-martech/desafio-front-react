import { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { getStorie } from '../../store/actions/stories';

import Navbar from '../../components/Navbar';
import WrapperCss from '../../components/WrapperCss';
import Card from '../../components/Card';
import ListCards from '../../components/ListCards';
import Pagination from '../../components/Pagination';

import { setStoriesPage } from '../../store/actions/pagination';

import styled from 'styled-components';
import { color, layout } from 'styled-system';

const Storie = ({ storieId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorie(storieId))
  }, [dispatch]);

  const store = useSelector((state) => state);
  const { characters, title, description } = store.stories.storie.results[0];

  return (
    <>
      <Head>
        <title>{ title } - Página de História</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta property="og:Historia" content="Historia" key="Historia" />
      </Head>
      <Navbar/>

      <WrapperCss>
        <Title color="marvel_gray">{ title }</Title>
        { description ? <Description color="marvel_gray">{ description }</Description> : '' }

        <HeroesListTitle>Heróis Participantes</HeroesListTitle>

        <ListCards>
          { characters.items.map((heroe, index) => (
            <Link key={ index } href="/heroe/[id]" as={`/heroe/${heroe.resourceURI.replace('http://gateway.marvel.com/v1/public/characters/', '')}`}>
              <LinkElement width={[ 1, 1/2, 1/2, 1/4, 1/4 ]} height={250}>
                <Card heroe={heroe} hoverColor="marvel_red" />
              </LinkElement>
            </Link>
            )) 
          }
        </ListCards>
      </WrapperCss>
    </>
  )
}

export default Storie;

export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: {
      storieId: id
    }
  }
}

const Title = styled.h1`
  ${color}
  font: 30px 'Roboto';
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  ${color}
  font: 16px 'Roboto';
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const LinkElement = styled.a`
  background: #1f1f1f;
  cursor: pointer;
  position: relative;
  margin: 5px;
  max-height: 280px;
  ${layout};
`;

const HeroesListTitle = styled.h2`
  ${color}
  font: 25px 'Roboto';
  font-weight: 600;
  margin: 50px 0 10px 0;
  text-align: center;
`;