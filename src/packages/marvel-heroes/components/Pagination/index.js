import styled from 'styled-components';
import { color } from 'styled-system';

const Pagination = ({ offset, total, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(total / offset) - 1; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    paginate(number);
  }

  return (
    <nav>
      <PaginationStyle>
        { pageNumbers.map(number => (
            <PaginationItem 
              key={number} 
              onClick={ () => handlePageClick(number) }
              color={ number === currentPage ? '#fff' : 'marvel_gray' }
              bg={ number === currentPage ? 'marvel_gray' : 'transparent' }>
              {number + 1}
            </PaginationItem>
        )) }
     </PaginationStyle>
    </nav>
  )
}

const PaginationStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 10px;
`;

const PaginationItem = styled.li`
  border: 1px solid #ccc;
  ${color};
  cursor: pointer;
  margin-right: 2px;
  margin-bottom: 5px;
  font: 14px 'Roboto';
  padding: 5px 10px;
  transition: background .6s ease, color .6s ease;

  :hover {
    background: #000;
    color: #fff;
  }
`;

export default Pagination;