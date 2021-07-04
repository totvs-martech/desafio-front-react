import styled from 'styled-components';

interface ContainerProps {
  thumbnail: string
}

export const Container = styled.div<ContainerProps>`
  width: 250px;
  height: 290px;
  background: ${props => props.theme.background.dark};
  background-image: linear-gradient(rgba(0,0,0,0.2), rgb(0,0,0) 90%), url(${props => props.thumbnail});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.DEFAULT};
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  padding: 15px;

  transition: transform 0.2s ease;

  span {
    font-weight: 600;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.08);

    span {
      color: #ff623e;
      background: #fff4e6;
      padding: 4px 20px;
      clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
      border: 2px solid #ff623e;
    }
  }
`;
