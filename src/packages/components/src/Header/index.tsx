import React from 'react';
import { Wrapper } from '../Wrapper'

import { Container, NavItens } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <NavItens>
          {children}
        </NavItens>
      </Wrapper>
    </Container>
  );
}

export { Header };