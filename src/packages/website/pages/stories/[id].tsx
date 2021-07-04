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

import { IStory } from '../../store/modules/stories/types'

interface SotoriesProps {
  story: IStory
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export default function Sotories({ story }: SotoriesProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Story - Marvel Heros</title>
        <meta name="description" content={`Details of ${story.title}`} />
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

        {story && (
          <Container fullWidth py="xl">
            <FigureSection>
              <Image 
                src={
                  story.thumbnail 
                  ? `${story.thumbnail.path}.${story.thumbnail.extension}`
                  : '/marvel-not-image.jpg'
                } 
                layout="fill"
                objectFit="contain"
                alt="Character image"
                className="figure-image"
                unoptimized={true}
              />
            </FigureSection>

            <DatailsContainer>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <hr />
              
              <CustomList 
                defaultActive="Characters"
                data={[
                  { nameList: 'Characters', items: story.characters.items },
                  { nameList: 'Comics', items: story.comics.items },
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
      const { results } = state.stories;

      const story = results.find(c => c.id === Number(id))

      if (story) {
        return {
          props: { story },
          revalidate: 60 * 30
        }
      }

      const response = await api.get(`v1/public/stories/${id}`)

      const { data } = response.data

      return {
        props: { story: data.results[0] },
        revalidate: 60 * 30
      }
    } catch (error) {
      console.log(error)
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
);
