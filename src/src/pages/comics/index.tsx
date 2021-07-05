import { useEffect, useState } from 'react';
import api from '../../services/api';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardComics from "../../components/CardComics";
import Title from '../../components/Title';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';

import { 
  Container,
  Filter,
  Button
} from '../../styles/styledComponents/styles';

import "react-datepicker/dist/react-datepicker.css";

interface Comics {
  id: number
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const LIMIT = 20;

export default function Comics() {
  const [comics, setComics] = useState<Comics[]>([]);
  const [attributionText, setAttributionText] = useState('');
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [dateRange, setDateRange] = useState('');

  useEffect(() => {
    GetComics();
  }, [offset, dateRange])

  function handleDate() {
    if(startDate && endDate){
      if(isAfter(startDate, endDate)){
        alert('Start date must be less than end date');
      }else{
        setDateRange(`${startDate}+${endDate}`);
      }
    }else{
      alert('You need to select start date and end date');
    }
  }  

  async function GetComics(){
    setLoading(true);
    await api.get('comics', {
      params: {
        dateRange: dateRange 
        ? `${format(new Date(startDate ? startDate : 0), 'dd-MM-yyyy')},${format(new Date(endDate ? endDate : 0), 'dd-MM-yyyy')}` 
        : null,
        orderBy: 'title',
        limit: LIMIT,
        offset: offset
      }
    })
    .then(response => {
      setComics(response.data.data.results);
      setAttributionText(response.data.attributionText);
      setTotal(response.data.data.total)
      // console.log(response.data.data.results);
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
        <Title title="Comics" attributionText={attributionText} />
        {!loading && (
          <Container>
            <Filter>
              Search by date:
              <DatePicker 
                className="form-control"
                placeholderText='Start date'
                selected={startDate} 
                onChange={(date: Date | null) => date && setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
              <DatePicker
                className="form-control"
                placeholderText='End date' 
                selected={endDate} 
                onChange={(date: Date | null) => date && setEndDate(date)}
                dateFormat="dd/MM/yyyy"
              />
              <Button 
                onClick={handleDate}
              >
                Search
              </Button>
            </Filter>
          </Container>
        )}
        
      {loading ? (
        <Loading />
      ) : (
        <div className="album py-5 bg-light">
          <div className="container">
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
          </div>
        </div>
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
