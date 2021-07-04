import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;

  input {
    font-size: 14px;
    border: ${props => props.theme.border.primary};
    border-radius: ${props => props.theme.borderRadius.DEFAULT};
    background: ${props => props.theme.background.light};
    color: ${props => props.theme.text.light};
    padding: 10px 16px;
    transition: all 0.2s ease;

    &::placeholder {
      color: ${props => props.theme.text.lightGrey};
    }

    &:hover {
      border-color: ${props => props.theme.colors.primary};
    }

    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }
  }
`