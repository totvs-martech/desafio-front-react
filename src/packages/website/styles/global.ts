import { createGlobalStyle } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Manrope', sans-serif;
  }

  button {
    background: none;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text.light};
  }

  body {
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.text.light}
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.6rem;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-corner {
      border: none;
      background: none;
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.background.dark};
      border-radius: 20px;
      cursor: move;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${props => props.theme.background.secundary};
      }
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
      border: none;
  }

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
