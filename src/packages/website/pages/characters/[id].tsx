import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

import {
  Button,
  Container, 
  FigureSection,
  DatailsContainer,
} from '@monorepo/components'
import CustomList from '../../components/CustomList'

import api from '../../services/api'

import { storeWrapper } from '../../store/index';
import { ICharacter } from '../../store/modules/character/types'

interface CharacterProps {
  character: ICharacter
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export default function Character({ character }: CharacterProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{character.name} - Marvel Heros</title>
        <meta name="description" content={`Details of ${character.name}`} />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#121214" />
        <meta name="msapplication-TileColor" content="#121214" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container 
        pd="xl"
        color="primary" 
        fxDirection="col"
        overflow="auto"
      >
        <Button onClick={() => router.back()} width={100}>
          <FiArrowLeft size={18} /> Back
        </Button>

        {character !== undefined && (
          <Container fullWidth py="xl">
            <FigureSection>
              <Image 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                layout="fill"
                objectFit="contain"
                alt="Character image"
                className="figure-image"
                unoptimized={true}
              />
            </FigureSection>

            <DatailsContainer>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
              <hr />

              <CustomList 
                defaultActive="Stories"
                data={[
                  { nameList: 'Stories', items: character.stories.items },
                  { nameList: 'Comics', items: character.comics.items },
                ]}
              />
            </DatailsContainer>
          </Container>
        )}
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = storeWrapper.getStaticProps(store =>
  async ({ params }) => {
    try {
      const { id } = params as IParams

      const state = store.getState();
      const { results } = state.character;

      const character = results.find(c => c.id === Number(id))

      if (character) {
        return {
          props: { character },
          revalidate: 60 * 30
        }
      }

      const response = await api.get(`v1/public/characters/${id}`)

      const { data } = response.data

      return {
        props: { character: data.results[0] },
        revalidate: 60 * 30
      }
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
);
