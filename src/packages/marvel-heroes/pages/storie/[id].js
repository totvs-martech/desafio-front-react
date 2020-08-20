import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorie } from '../../store/actions/stories';

import Navbar from '../../components/Navbar';
import WrapperCss from '../../components/WrapperCss';

import styled from 'styled-components';
import { color } from 'styled-system';

const Storie = ({ storieId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorie(storieId))
  }, [dispatch]);

  const storie = useSelector((state) => state.stories.storie.results[0]);
  const { characters, title, description } = storie;

  // console.log(characters, title, description);

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
  text-align: center;
`;

const Description = styled.p`
  ${color}
  font: 16px 'Roboto';
  font-weight: 600;
  text-align: center;
`;