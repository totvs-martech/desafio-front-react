import styled from 'styled-components'

export const DatailsContainer = styled.div`
  width: 60%;
  padding: 0 ${props => props.theme.spacing.xl};
  height: 100%;

  h2 {
    font-size: 28px;
  }

  p {
    margin-top: ${props => props.theme.spacing.md};
    color: ${props => props.theme.text.lightGrey};
    font-size: 16px;
  }

  span {
    color: ${props => props.theme.colors.primary};
    margin-top: ${props => props.theme.spacing.md};
    display: block;

    strong {
      color: ${props => props.theme.text.light};
    }
  }

  hr {
      overflow: visible;
      margin: 25px 0;
      border: none;
      padding: 0 25px;
      border-top: 1px solid ${props => props.theme.text.dark};
      color: ${props => props.theme.text.lightGrey};
      text-align: center;
    }
`;