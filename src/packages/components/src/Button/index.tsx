import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secundary'
  width?: number
  height?: number
}

const Button: React.FC<ButtonProps> = ({ children, color, width, height, ...rest }) => {
  return (
    <Container color={color} width={width} height={height} {...rest}>
      {children}
    </Container>
  );
}

export { Button };