import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'
import { v4 } from 'uuid'

import {
  Button,
  Container, 
  FigureSection,
  DatailsContainer,
} from '@monorepo/components'
import CustomList from '../../components/CustomList'

import api from '../../services/api'
import { storeWrapper } from '../../store/index';

import { IComic } from '../../store/modules/comics/types'

interface ComicsProps {
  comic: IComic
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export default function Comics({ comic }: ComicsProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{comic.title} - Marvel Heros</title>
        <meta name="description" content={`Details of ${comic.title}`} />
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

        {comic && (
          <Container fullWidth py="xl">
            <FigureSection>
              <Image 
                src={
                  comic.thumbnail 
                  ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
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
              <h2>{comic.title}</h2>
              <p>{comic.description}</p>

              {comic.prices.map(price => (
                <span key={v4()}>
                  <strong>{price.type} - </strong>
                  ${price.price}
                </span>
              ))}
              <hr />
              
              <CustomList 
                defaultActive="Characters"
                data={[
                  { nameList: 'Characters', items: comic.characters.items },
                  { nameList: 'Stories', items: comic.stories.items },
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
      const { results } = state.comics;

      const comic = results.find(c => c.id === Number(id))

      if (comic) {
        return {
          props: { comic },
          revalidate: 60 * 30
        }
      }

      const response = await api.get(`v1/public/comics/${id}`)

      const { data } = response.data

      return {
        props: { comic: data.results[0] },
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
