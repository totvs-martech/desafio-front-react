import React from 'react';

import { Container } from './styles';

const GenericList: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export { GenericList };