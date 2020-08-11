import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../../store';
import { getHeroes, pageHeroes } from '../../store/actions/heroes';
import Link from 'next/link'

import styled from 'styled-components';
import Card from '../Card';
import { flexbox, layout } from 'styled-system';

const ListCards = _ => {
  const { heroesList } = useSelector((state) => state).heroes;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <ListWrapper display="flex" flexWrap='wrap'>
      { heroesList.map(heroe => (
        <Link key={ heroe.id } href="/heroe/[id]" as={`/heroe/${heroe.id}`}>
          <LinkElement width={[ 1, 1/2, 1/2, 1/4, 1/4 ]}>
            <Card heroe={heroe}/>
          </LinkElement>
        </Link>
        )) 
      }
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  ${layout};
  ${flexbox};
`;

const LinkElement = styled.a`
  background: #1f1f1f;
  cursor: pointer;
  position: relative;
  max-height: 280px;
  ${layout};
`;

export default ListCards;
