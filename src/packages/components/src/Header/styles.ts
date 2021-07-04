import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${props => props.theme.background.secundary};
`;

export const NavItens = styled.nav`
  height: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: 700;
`
