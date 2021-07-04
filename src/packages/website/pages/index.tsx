import { FormEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import { 
  Container, 
  Card,
  GenericList,
  ItemCard, 
  Input,
  Button,
  Pagination 
} from '@monorepo/components'
import { IState, storeWrapper } from '../store/index';


import api from '../services/api'

import { ICharactersState } from '../store/modules/character/types'
import { charactersUpdate } from '../store/modules/character/actions'

interface ParamsProps {
  limit?: number
  offset?: number
  nameStartsWith?: string
  modifiedSince?: Date
}

export default function Home() {
  const { results, total, limit, offset } = 
    useSelector<IState, ICharactersState>(state => state.character)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(Math.floor(offset/limit) + 1)
  const [startDate, setStartDate] = useState<any>(null);

  const handleChangePage = async (number: number) => {
    const params: ParamsProps = {
      limit: 20,
      offset: offset + limit
    }

    if (search !== '') {
      params.nameStartsWith = search
    }

    if (startDate) {
      params.modifiedSince = startDate
    }
    const response = await api.get('/v1/public/characters', {
      params: { ...params }
    })

    const { data } = response.data

    dispatch(charactersUpdate(data))
    setPage(number)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    const params: ParamsProps = {}

    if (search !== '') {
      params.nameStartsWith = search
    }

    if (startDate) {
      params.modifiedSince = startDate
    }

    const response = await api.get('/v1/public/characters', {
      params: { ...params }
    })

    const { data } = response.data

    dispatch(charactersUpdate(data))
    setPage(1)
  }

  return (
    <>
      <Head>
        <title>Characters - Marvel Heros</title>
        <meta name="description" content="Marvel Characters list" />
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

        <Container my="lg" fxDirection="col">
          <h2>Marvel Characters</h2>
          <form onSubmit={handleSearch}>
            <Container my="md" alignItems="center">
              <Input
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                placeholder="Search for a character..." 
              />
              <DatePicker 
                placeholderText="Search since date"
                selected={startDate}
                onChange={(date) => setStartDate(date)} 
              />
              <Button height={40} type="submit">Search</Button>
            </Container>
          </form>
        </Container>

        {search !== '' && (
          <h3>Result for: {search}</h3>
        )}

        <GenericList>
          {results.map(character => (
            <div key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <a href="">
                  <ItemCard 
                    item={{ 
                      name: character.name,
                      thumbnail: character.thumbnail 
                        ? `${character.thumbnail.path}.${character.thumbnail.extension}`
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

    const response = await api.get('/v1/public/characters', {
      params: {
        limit: 20,
        offset: 0
      }
    })
    
    const { data } = response.data

    store.dispatch(charactersUpdate(data));

    return {
      props: {}
    }
  }
);
