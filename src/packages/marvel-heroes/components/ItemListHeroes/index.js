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
  font: 20px 'Roboto';
  position: relative;
  transition: background .8s ease;

  &:hover {
    background: #eb1e25;
  }

  a {
    color: #fff;
    display: block;
    padding: 10px 25px;
    text-decoration: none;
  }
`;