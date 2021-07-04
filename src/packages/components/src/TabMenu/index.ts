import styled from 'styled-components';

interface TabItemProps {
  active?: boolean
}

export const Container = styled.div`
  width: 100%;
`;

export const TabHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`

export const TabItem = styled.button<TabItemProps>`
  color: ${props => props.theme.text.light};
  font-weight: 700;
  font-size: 18px;
  margin-right: 16px;
  transition: all 0.2s ease;
  border-bottom: 3px solid ${props => props.active ? props.theme.colors.primary : '#000'};
  cursor: pointer;
`

export const TabContent = styled.div`
  width: 100%;
  transition: all 0.2s ease;
  margin-top: ${props => props.theme.spacing.md};
`