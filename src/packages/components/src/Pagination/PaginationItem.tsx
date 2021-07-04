import React from 'react';

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page:number) => void
}

import { PageButton } from './styles'

const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  number,
  onPageChange
}) => {
  return (
    <PageButton 
      onClick={() => onPageChange(number)} 
      isCurrent={isCurrent}
    >
      {number}
    </PageButton>
  );
}

export default PaginationItem;