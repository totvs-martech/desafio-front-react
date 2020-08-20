import React from 'react';
import styled from 'styled-components';

const ListHeroes = (props) => {
  return (
    <>
      <ListTitle>Histórias</ListTitle>
      <List>
        {props.children}
      </List>
    </>
  );
}

export default ListHeroes;

const List = styled.ul`
  background: linear-gradient(175deg,rgb(0 0 0 / 37%),rgb(16 16 16 / 32%));
  box-shadow: 0px 0px 53px 2px rgba(0,0,0,0.75);
  margin: auto;
  max-height: 50vh;
  overflow-y: auto;
  padding-top: 10px;
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    height: 60vh;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  &::-webkit-scrollbar {
    background: #101010;
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #eb1e25;
  }
`;

const ListTitle = styled.h2`
  color: #fff;
  font: 30px 'Roboto';
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
`;