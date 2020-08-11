import React from 'react';

import styled from 'styled-components';
import { layout } from 'styled-system';

const CardContainer = styled.div`
  background: #1f1f1f;
  cursor: pointer;
  position: relative;
  max-height: 280px;
  ${layout};
`;

const Thumbnail = styled.img`
  height: 100%;
  opacity: .2;
  transition: opacity .6s ease;
  width: 100%;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const CardName = styled.p`
  color: #fff;
  font: 23px 'Roboto', 'Arial';
  font-weight: 600;
  left: 50%;
  opacity: 1;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity .6s ease;
  width: 80%;

  ${CardContainer}:hover & {
    opacity: 0;
  }
`;

const Card = (props) => (
  <CardContainer width={1, 1/2, 1/4}>
    <Thumbnail src={`${props.heroe.thumbnail.path}.${props.heroe.thumbnail.extension}`} />
    <CardName>{ props.heroe.name }</CardName>
  </CardContainer>
);

export default Card;