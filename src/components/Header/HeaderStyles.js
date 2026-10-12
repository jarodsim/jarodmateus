import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.4rem 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-wrap: wrap;
    gap: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1.8rem 2rem;
  }
`;

export const Div1 = styled.div`
  flex-shrink: 0;
  .brand { display: flex; align-items: center; gap: 1.2rem; font-family: ${({ theme }) => theme.fonts.title}; font-size: 2rem; font-weight: 700; }
  img { border-radius: 5px; }

  @media ${({ theme }) => theme.breakpoints.sm} {
    .brand { font-size: 1.7rem; }
    img { width: 32px; height: 32px; }
  }
`;

export const Div2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: ${({ theme }) => theme.colors.primary2};
    font-size: 1.4rem;
    font-weight: 600;
    transition: color .18s ease;
  }

  a:hover { color: ${({ theme }) => theme.colors.primary1}; }

  @media ${({ theme }) => theme.breakpoints.md} {
    order: 3;
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.sm} { gap: 2rem; }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    > a { display: none; }
  }
`;

export const SocialIcons = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.primary2};
  transition: color .18s ease;

  &:hover { color: ${({ theme }) => theme.colors.accent1}; }
`;
