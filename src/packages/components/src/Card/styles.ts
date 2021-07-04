import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  min-height: 280px;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.lg};
  position: relative;
`;
