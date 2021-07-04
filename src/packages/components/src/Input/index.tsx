import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({
  ...rest
}) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  )
}

export { Input };