import React from 'react';

import { Container } from './styles';

const Aside: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export { Aside };