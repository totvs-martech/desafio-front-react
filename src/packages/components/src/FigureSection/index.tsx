import styled from 'styled-components';

export const FigureSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 500px;
  position: relative;
  overflow: hidden;


  .figure-image {
    max-width: 100%;
    border-radius: ${props => props.theme.borderRadius.lg};
  }
`;
