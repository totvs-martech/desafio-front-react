import styled from 'styled-components';
import { color } from 'styled-system';

const Pagination = ({ offset, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / offset); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationStyle>
        { pageNumbers.map(number => (
            <PaginationItem 
              key={number} 
              onClick={() => paginate(number * offset)}
              color='marvel_gray'>
              {number}
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