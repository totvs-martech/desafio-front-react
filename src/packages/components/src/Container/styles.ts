import styled, { css } from 'styled-components';
import { ContainerProps } from './index'

export const Container = styled.div<ContainerProps>`
  display: flex;
  ${props => props.fullWidth && css`
    height: 100%;
    width: 100%;
  `}
  ${props => props.fullView && css`
    height: 100vh;
    width: 100vw;
  `}
  ${props => props.wrap && css`
    flex-wrap: ${props.wrap};
  `}
  ${props => props.color && css`
    background: ${props.theme.background[props.color]};
  `}
  ${props => props.pd && css`
    padding: ${props.theme.spacing[props.pd]};
  `}
  ${props => props.py && css`
    padding-top: ${props.theme.spacing[props.py]};
    padding-bottom: ${props.theme.spacing[props.py]};
  `}
  ${props => props.px && css`
    padding-left: ${props.theme.spacing[props.px]};
    padding-right: ${props.theme.spacing[props.px]};
  `}
  ${props => props.mg && css`
    margin: ${props.theme.spacing[props.mg]};
  `}
  ${props => props.my && css`
    margin-top: ${props.theme.spacing[props.my]};
    margin-bottom: ${props.theme.spacing[props.my]};
  `}
  ${props => props.mx && css`
    margin-left: ${props.theme.spacing[props.mx]};
    margin-right: ${props.theme.spacing[props.mx]};
  `}
  ${props => props.fxDirection === 'col' && css`
    flex-direction: column;
  `}
  ${props => props.overflow && css`
    overflow: ${props.overflow};
  `}
  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
`;
