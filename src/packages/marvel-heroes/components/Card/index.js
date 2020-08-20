import styled from 'styled-components';
import { color } from 'styled-system';

const Card = (props) => (
  <CardContainer>
    { props.heroe.thumbnail ? <Thumbnail src={`${props.heroe.thumbnail.path}.${props.heroe.thumbnail.extension}`} /> : '' }
    <CardName color={props.hoverColor}>{ props.heroe.name }</CardName>
  </CardContainer>
)

export default Card;

const CardContainer = styled.div`
  height: 100%;
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
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: color .6s ease;
  width: 80%;

  ${CardContainer}:hover & {
    ${color}
  }
`;