import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4.8rem 4rem;

  @media ${({ theme }) => theme.breakpoints.sm} { padding: 0 2rem 3rem; }
`;

export const LinkList = styled.ul`
  padding: 3.2rem 0 5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LinkColumn = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;
`;

export const LinkTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .12em;
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.primary1};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 700;
  letter-spacing: -.025em;
  overflow-wrap: anywhere;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent1};

  &:hover { color: ${({ theme }) => theme.colors.accent1}; }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.sm} { flex-wrap: wrap; }
`;

export const CompanyContainer = styled.div``;

export const Slogan = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.3rem;
  line-height: 1.6;

  a { border-bottom: 1px solid currentColor; }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`;
