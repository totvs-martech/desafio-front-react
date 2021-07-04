import React from 'react';
import PaginationItem from './PaginationItem'

import { Container, PaginationList } from './styles';

interface PaginationProps {
  totalRegisters: number
  registersPerPage?: number
  currentPage?: number
  siblingsCount?: number
  onPageChange: (page: number) => void
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

const Pagination: React.FC<PaginationProps> = ({
  totalRegisters,
  registersPerPage = 20,
  currentPage = 1,
  siblingsCount = 1,
  onPageChange
}) => {
  const lastPage = Math.ceil(totalRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []


  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Container>
      <div>
        <strong>{registersPerPage * (currentPage - 1)}
        </strong> - <strong>
          {(registersPerPage * currentPage) < totalRegisters 
            ? (registersPerPage * currentPage)
            : totalRegisters
          }
        </strong> of <strong>{totalRegisters}</strong>
      </div>
      <PaginationList>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && <span>...</span>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}
        
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <span>...</span>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </PaginationList>
    </Container>
  );
}

export { Pagination };