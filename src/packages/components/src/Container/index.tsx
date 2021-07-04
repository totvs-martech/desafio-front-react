import React from 'react';

import { Container as Content } from './styles';

export interface ContainerProps {
  fullView?: boolean
  fullWidth?: boolean
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  color?: 'primary' | 'secundary'
  fxDirection?: 'col' | 'row'
  pd?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  px?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  py?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  mg?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  mx?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  my?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
}

const Container: React.FC<ContainerProps> = ({ 
  children,
  fullView,
  fullWidth,
  wrap,
  color, 
  fxDirection,
  pd,
  px,
  py,
  mg,
  mx,
  my,
  overflow,
  justifyContent,
  alignItems
}) => {
  return (
    <Content
      fullView={fullView}
      fullWidth={fullWidth}
      wrap={wrap}
      color={color} 
      fxDirection={fxDirection} 
      pd={pd}
      px={px}
      py={py}
      mg={mg}
      mx={mx}
      my={my}
      overflow={overflow}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Content>
  );
}

export { Container };