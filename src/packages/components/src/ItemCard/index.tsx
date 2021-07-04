import React from 'react';

import { Container } from './styles';

export interface ItemCardProps {
  item: {
    name: string
    thumbnail: string
  }
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Container 
      thumbnail={`${item.thumbnail}`}
    >
      <span>{item.name}</span>
    </Container>
  );
}

export { ItemCard };