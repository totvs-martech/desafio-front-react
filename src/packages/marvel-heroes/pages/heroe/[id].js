import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../../store';
import { useRouter } from 'next/router';
import { getStories } from '../../store/actions/stories';
import Navbar from '../../components/Navbar';
import WrapperCss from '../../components/WrapperCss';

const Heroe = ({ heroe }) => {
  const { storiesList } = useSelector((state) => state).stories;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories(heroe))
  }, [dispatch]);
  return (
    <>
      <Navbar/>
      <WrapperCss>
        <h1>{ heroe }</h1>
      </WrapperCss>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: {
      heroe: id
    }
  }
}

export default Heroe;

