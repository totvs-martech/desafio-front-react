import styled from 'styled-components';

interface PageButtonProps {
  isCurrent?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationList = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  margin: 16px 6px;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.text.light};
  background: ${props => props.isCurrent ? props.theme.colors.primary : props.theme.background.dark};
  border-radius: ${props => props.theme.borderRadius.DEFAULT};
  min-width: 35px;
  height: 35px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${props => !props.isCurrent && props.theme.background.secundary};
  }
`;
