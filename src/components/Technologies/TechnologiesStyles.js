import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 5rem;
  margin: 3.6rem 0 11rem;

  @media ${({ theme }) => theme.breakpoints.sm} { grid-template-columns: 1fr; }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 2rem;
  padding: 2.6rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  > span { color: ${({ theme }) => theme.colors.accent1}; padding-top: .2rem; }
`;

export const ListContainer = styled.div`
  min-width: 0;
`;

export const ListTitle = styled.h3`
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const ListParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.5rem;
  line-height: 1.7;
`;
