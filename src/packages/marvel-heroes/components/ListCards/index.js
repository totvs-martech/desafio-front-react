import React from 'react';
import styled from 'styled-components';
import { flexbox, layout } from 'styled-system';

const ListCards = (props) => {
  return (
    <ListWrapper display="flex" flexWrap='wrap' justifyContent='center'>
      { props.children }
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  ${layout};
  ${flexbox};
`;

export default ListCards;
