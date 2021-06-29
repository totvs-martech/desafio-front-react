import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import api from '../../services/api';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardComics from "../../components/CardComics";
import Loading from '../../components/Loading'
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
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Props{
  character: {
    data: {
      results: Character[];
    }
  }
}

const LIMIT = 12;

export default function CharacterDetails(props: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<Character[]>([]);
  const [comics, setComics] = useState<Comics[]>([]);
  const [loadingComics, setLoadingComics] = useState(false);
  const [loadingComicsBt, setLoadingComicsBt] = useState(false);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(LIMIT);

  useEffect(() => {
    GetCharacter();
    GetComics();
  }, []);

  async function GetCharacter(){
    setCharacter(props.character.data.results);
  }

  async function GetComics() {
    setLoadingComics(true);
    await api.get(`characters/${id}/comics`, { 
      params: {
        limit: LIMIT
      }
    }) 
    .then(response => {
      setComics(response.data.data.results);
      setTotal(response.data.data.total);
      setLoadingComics(false);
    })
    .catch(error => {
      console.log(error);
      setLoadingComics(false);
    })
  }

  async function GetMoreComics() {
    setLoadingComicsBt(true);
    try {
      const response = await api.get(`characters/${id}/comics`, { 
        params: {
          limit: LIMIT,
          offset: comics.length,
        }
      });
      setComics([...comics, ...response.data.data.results]);
      setTotal(response.data.data.total);
      setLoadingComicsBt(false);

    } catch(error) {
      console.log(error);
      setLoadingComicsBt(false);
    }
  }

  return (
    <>
      <Navbar />
      <main>
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
          {character.map(characterInfo => {
            return(
              <CardDetails
                key={characterInfo.id}
                id={characterInfo.id}
                title={characterInfo.name}
                modified={characterInfo.modified}
                description={characterInfo.description}
                thumbnail={characterInfo.thumbnail.path}
                thumbnailExtension={characterInfo.thumbnail.extension}
              />
            );
          })}
          {loadingComics ? (
            <Loading />
          ) : ( 
            <div className="container">
              { comics.length > 0 && (
              <>
                <h4>Character is present in these comics: </h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {comics.map(comic => {
                    return(
                      <CardComics 
                        key={comic.id} 
                        id={comic.id}
                        title={comic.title} 
                        thumbnail={comic.thumbnail.path}
                        thumbnailExtension={comic.thumbnail.extension}
                      />
                    );  
                  })}
                </div>
              </>
              )}
              {total > comics.length && (
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                  {loadingComicsBt ? (
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
                      onClick={GetMoreComics}
                    >
                      See more
                    </button>
                  )}
                </div>
                
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context:any) => {
  const { id } = context.query;
  const { data } = await api.get(`characters/${id}`);

  return {
    props: {
      character: data
    }
  }
}