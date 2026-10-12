import styled from 'styled-components';

export const LeftSection = styled.div`
  max-width: 760px;
  padding: clamp(9rem, 13vw, 17rem) 0 clamp(8rem, 11vw, 14rem);
`;

export const HeroIntro = styled.p`
  color: ${({ theme }) => theme.colors.accent1};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const HeroText = styled.p`
  max-width: 680px;
  color: ${({ theme }) => theme.colors.primary2};
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  line-height: 1.5;
  margin-top: 2rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem 3rem;
  margin-top: 4rem;
`;

export const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: 48px;
  padding: 1.2rem 1.8rem;
  background: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.background1};
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  transition: background .18s ease;

  &:hover { background: #c7e0e1; }
`;

export const Maintainer = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.4rem;

  a { color: ${({ theme }) => theme.colors.primary1}; border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
  a:hover { border-color: ${({ theme }) => theme.colors.accent1}; }
`;
