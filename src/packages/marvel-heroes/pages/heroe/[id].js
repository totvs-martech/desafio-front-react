import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../../store';
import { useRouter } from 'next/router';
import { getStories } from '../../store/actions/stories';
import { getHeroeInfo } from '../../store/actions/heroes';
import Navbar from '../../components/Navbar';
import WrapperCss from '../../components/WrapperCss';
import styled from 'styled-components';
import { flexbox, layout, color, background } from 'styled-system';

const Heroe = ({ heroeId }) => {
  // console.log(useSelector(state => state))
  const store = useSelector((state) => state);
  console.log(store)
  const { name, comics, series, stories, thumbnail } = store.heroes.characterInfo;
  const { storiesList } = store.stories;

  const backgroundUrl = `${thumbnail.path}.${thumbnail.extension}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories(heroeId))
    dispatch(getHeroeInfo(heroeId))
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{ name } - Página do Personagem</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta property="og:Personagem" content="Personagem" key="Personagem" />
      </Head>
      <Navbar/>
      <Background
        backgroundUrl={backgroundUrl}
        backgroundSize="cover"
      >
        <WrapperCss>
          <CharacterInfoContainer display='flex' justifyContent='center'>
            <CharacterInfoContent>
              <Thumbnail 
                src={`${thumbnail.path}.${thumbnail.extension}`} 
                alt={ `Imagem do personagem ${name}` } 
                title={ name } />
            </CharacterInfoContent>

            <CharacterInfoContent>
              <CharacterTitle color="marvel_gray" >{ name }</CharacterTitle>
              <CharacterText>Quadrinhos: { comics.available }</CharacterText>
              <CharacterText>Séries: { series.available }</CharacterText>
              <CharacterText>Histórias: { stories.available }</CharacterText>
            </CharacterInfoContent>

          </CharacterInfoContainer>
        </WrapperCss>
      </Background>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: {
      heroeId: id
    }
  }
}

const CharacterTitle = styled.h1`
  color: #fff;
  font: 32px 'Roboto';
  font-weight: 700;
  margin-bottom: 25px;
`;

const CharacterText = styled.p`
  color: #fff;
  font: 24px 'Roboto';
  font-weight: 600;
  letter-spacing: -2px;
`;

const CharacterInfoContainer = styled.div`
  ${layout}
  ${flexbox}
`;

const CharacterInfoContent = styled.aside`
  &:first-child {
    max-width: 330px;
    width: 25%;
  }
  
  &:last-child {
    margin-left: 20px;
    width: 25%;
  }
`;

const Thumbnail = styled.img`
  max-height: 300px;
  object-fit: contain;
  width: 100%;
`;

const Background = styled.div`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0; 
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    background: linear-gradient(175deg, #000, #272727);
    z-index: -2;
  }

  &:after {
    background: url(${props => props.backgroundUrl}) 0 calc(100vh - 110vh) no-repeat;
    ${background}
    opacity: .05;
    z-index: -1;
  }
`;

export default Heroe;

