import styled, { css } from 'styled-components';
import { ButtonProps } from './index'

export const Container = styled.button<ButtonProps>`
  color: ${props => props.theme.text.light};
  font-size: 16px;
  ${props => props.width && css`
    width: ${props.width}px;
  `}
  ${props => props.height && css`
    height: ${props.height}px;
  `}
  padding: 12px;
  text-align: left;
  background: ${props => props.color ? css`${props.theme.colors.button[props.color]}` : props.theme.colors.button.primary};
  margin: ${props => props.theme.spacing.sm} 0;
  border-radius: ${props => props.theme.borderRadius.DEFAULT};
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => props.theme.colors.button.active};
  }

  svg {
    margin-right: 12px;
  }
`;
