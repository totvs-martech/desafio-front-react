import styled from 'styled-components';
import { color } from 'styled-system';

const Navbar = styled.nav`
  align-items: center;
  ${color}
  display: flex;
  height: 85px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  &:after,
  &:before {
    ${color}
    border-radius: 60px;
    bottom: -15px;
    content: '';
    display: block;
    height: 200px;
    max-width: 450px;
    position: absolute;
    width: 50%;
    z-index: 1;
  }

  &:before {
    left: -50px;
  }

  &:after {
    right: -50px;
  }
`;

export default Navbar;