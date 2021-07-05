import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import api from '../../services/api';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Loading from '../../components/Loading';
import CardDetails from '../../components/CardDetails';

interface Character{
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Comics {
  id: number
  title: string;
  modified: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  dates: Array<{
    date: string;
    type: string;
  }>
  prices: Array<{
    price: number;
    type: string;
  }>
}

interface Props{
  character: {
    data: {
      results: Comics[];
    }
  }
}

const LIMIT = 12;

export default function ComicDetails(props: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [characters, setCharacters] = useState<Character[]>([]);
  const [comic, setComic] = useState<Comics[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingCharacters, setLoadingCharacters] = useState(false);
  const [loadingCharacterBt, setLoadingCharacterBt] = useState(false);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(LIMIT);

  useEffect(() => {
    GetComic();
    GetCharacters();
  }, [])

  async function GetComic(){
    setComic(props.character.data.results);
  }

  async function GetCharacters() {
    setLoadingCharacters(true);
    await api.get(`comics/${id}/characters`, { 
      params: {
        limit: LIMIT
      }
    })
    .then(response => {
      setCharacters(response.data.data.results);
      // console.log('CHARS: ', response.data.data.results);
      setLoadingCharacters(false);
    })
    .catch(error => {
      console.log(error);
      setLoadingCharacters(false);
    })
  }

  async function GetMoreCharacters() {
    setLoadingCharacterBt(true);
    try {
      const response = await api.get(`comics/${id}/characters`, { 
        params: {
          limit: LIMIT,
          offset: characters.length,
        }
      });
      setCharacters([...characters, ...response.data.data.results]);
      setTotal(response.data.data.total);
      setLoadingCharacterBt(false);

    } catch(error) {
      console.log(error);
      setLoadingCharacterBt(false);
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {loading ? (
          <Loading />
        ) : (
          <>
          <div className="container-fluid bg-light">
            <div className="container">
              <a onClick={() => router.back()}
                className="btn btn-link" 
                type="button"
              >
                &larr; Back
              </a>
            </div>
          </div>
          <div className="album pb-4 pt-1 bg-light">
            {comic.map(comicInfo => {
              return(
                <CardDetails
                  key={comicInfo.id}
                  id={comicInfo.id}
                  title={comicInfo.title}
                  modified={comicInfo.modified}
                  description={comicInfo.description}
                  thumbnail={comicInfo.thumbnail.path}
                  thumbnailExtension={comicInfo.thumbnail.extension}
                  date={comicInfo.dates[0].date}
                  dateType={comicInfo.dates[0].type}
                  price={comicInfo.prices[0].price}
                  priceType={comicInfo.prices[0].type}
                />
              );
            })}
            {loadingCharacters ? (
              <Loading />
            ) : (
              <div className="container">
                { characters.length > 0 && (
                <>
                  <h4>Characters present in this comic: </h4>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {characters.map(characterInfo => {
                      return(
                        <Card key={characterInfo.id} 
                          id={characterInfo.id}
                          name={characterInfo.name} 
                          thumbnail={characterInfo.thumbnail.path}
                          thumbnailExtension={characterInfo.thumbnail.extension}
                        />
                      );  
                    })}
                  </div>
                </>
                )}
                {total > characters.length && (
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                  {loadingCharacterBt ? (
                    <button 
                      className="btn btn-secondary" 
                      type="button" 
                      disabled
                    >
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="visually-hidden">Loading...</span>
                    </button>
                  ) : (
                    <button 
                      className="btn btn-secondary" 
                      type="button"
                      onClick={GetMoreCharacters}
                    >
                      See more
                    </button>
                  )}
                </div>
                
              )}
              </div>
            )}
          </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context:any) => {
  const { id } = context.query;
  const { data } = await api.get(`comics/${id}`);

  return {
    props: {
      character: data
    }
  }
}
