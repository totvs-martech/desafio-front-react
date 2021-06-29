import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loading from '../components/Loading';
import Title from '../components/Title';
import Pagination from '../components/Pagination';

import { 
  Container,
  Filter,
  InputGroup,
  FormControl,
  Button
} from '../styles/styledComponents/styles';

interface iCharacter{
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const LIMIT = 20;

export default function Home() {
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [attributionText, setAttributionText] = useState('');
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [name, setName] = useState('');
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    GetCharactersList();
  }, [offset, name])

  async function GetCharactersList(){
    setLoading(true);
    await api.get('characters', {
      params: {
        nameStartsWith: name === '' ? null : name,
        orderBy: 'name',
        limit: LIMIT,
        offset: offset
      }
    })
    .then(response => {
      setCharacters(response.data.data.results);
      setAttributionText(response.data.attributionText);
      setTotal(response.data.data.total)
      // console.log(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    })
  }
  
  return (
    <>
      <Navbar />
      <main>
        <Title title="Characters" attributionText={attributionText} />
        {!loading && (
          <Container>
            <Filter>
              <InputGroup>
                <FormControl 
                  type="text" 
                  placeholder="Search by name"
                  value={inputSearch} 
                  onChange={event => {setInputSearch(event.target.value)}}
                />
                <Button
                  onClick={() => {
                    setName(inputSearch);
                    setOffset(0);
                  }}
                >
                  Search
                </Button>
 
              </InputGroup>
            </Filter>
          </Container>
        )}
        {loading ? (
          <Loading />
        ) : (
          <>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {characters.map(character => {
                  return(
                    <Card 
                      key={character.id} 
                      name={character.name} 
                      id={character.id}
                      thumbnail={character.thumbnail.path}
                      thumbnailExtension={character.thumbnail.extension}
                    />
                  );  
                })}
              </div>
            </div>
          </div>
          </>
        )}
        {!loading && (
          <Pagination 
            limit={LIMIT} 
            total={total} 
            offset={offset} 
            setOffset={setOffset} 
          />
        )}
        
      </main>
      <Footer />
    </>
  )
}
