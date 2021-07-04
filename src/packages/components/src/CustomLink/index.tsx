import styled from 'styled-components';

export const CustomLink = styled.a`
  font-style: italic;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;
