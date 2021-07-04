import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Container, 
  Card,
  GenericList,
  ItemCard,
  Pagination 
} from '@monorepo/components'
import { IState, storeWrapper } from '../../store/index';

import api from '../../services/api'

import { IComicsState } from '../../store/modules/comics/types'
import { comicsUpdate } from '../../store/modules/comics/actions'

interface ParamsProps {
  limit?: number
  offset?: number
  nameStartsWith?: string
}

export default function ShowComics() {
  const { results, total, limit, offset } = 
    useSelector<IState, IComicsState>(state => state.comics)
  const dispatch = useDispatch()

  const [page, setPage] = useState(Math.floor(offset/limit) + 1)

  const handleChangePage = async (number: number) => {
    const params: ParamsProps = {
      limit: 20,
      offset: offset + limit
    }

    const response = await api.get('/v1/public/comics', {
      params: { ...params }
    })

    const { data } = response.data

    dispatch(comicsUpdate(data))
    setPage(number)
  }

  return (
    <>
      <Head>
        <title>Comics - Marvel Heros</title>
        <meta name="description" content="Marvel Comics list" />
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
        <Card>
          <Image 
            src="/background.png" 
            alt="Background Marvel" 
            layout="fill" 
            objectFit="cover"
            unoptimized={true}
          />
        </Card>

        <Container my="lg" alignItems="center">
          <h2>Marvel Comics</h2>
        </Container>

        <GenericList>
          {results.map(comic => (
            <div key={comic.id}>
              <Link href={`/comics/${comic.id}`}>
                <a href="">
                  <ItemCard 
                    item={{ 
                      name: comic.title,
                      thumbnail: comic.thumbnail 
                        ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                        : '/marvel-not-image.jpg'
                    }} 
                  />
                </a>
              </Link>
            </div>
          ))}
        </GenericList>

        <Pagination
          totalRegisters={total}
          currentPage={page}
          registersPerPage={limit}
          onPageChange={handleChangePage}
        />
      </Container>
    </>
  )
}

export const getStaticProps = storeWrapper.getStaticProps(store =>
  async () => {
    const state = store.getState();
    const { total } = state.character;

    if (total > 0) {
      return {
        props: {}
      }
    }

    const response = await api.get('/v1/public/comics', {
      params: {
        limit: 20,
        offset: 0
      }
    })
    
    const { data } = response.data

    store.dispatch(comicsUpdate(data));

    return {
      props: {}
    }
  }
);
