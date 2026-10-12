import styled from 'styled-components';

export const TimelineList = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 5rem;
  margin: 3.6rem 0 11rem;

  @media ${({ theme }) => theme.breakpoints.sm} { grid-template-columns: 1fr; }
`;

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 2rem;
  padding: 2.2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.md} { grid-template-columns: 1fr; gap: .8rem; }
`;

export const TimelineYear = styled.span`
  color: ${({ theme }) => theme.colors.accent1};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

export const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.5rem;
  line-height: 1.7;
`;
