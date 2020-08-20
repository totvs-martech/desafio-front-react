import React from 'react';
import styled from 'styled-components';

const ItemListHeroes = (props) => {
  return (
    <Item>{props.children}</Item>
  );
}

export default ItemListHeroes;

const Item = styled.li`
  background: transparent;
  color: #fff;
  cursor: pointer;
  font: 16px 'Roboto';
  padding: 10px 25px;
  transition: background .8s ease;

  &:hover {
    background: #000;
  }
`;