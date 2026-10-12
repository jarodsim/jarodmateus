import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  padding: 3rem 0 11rem;

  @media ${({ theme }) => theme.breakpoints.md} { grid-template-columns: 1fr; }
`;

export const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: ${({ theme }) => theme.colors.background2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color .2s ease;

  &:hover { border-color: ${({ theme }) => theme.colors.accent1}; }

  &:first-child {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;

    > button:first-child { grid-column: 2; grid-row: 1 / 4; min-height: 380px; }
    > div:not(:first-child) { grid-column: 1; }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    &:first-child { display: flex; }
    &:first-child > button:first-child { min-height: 0; }
  }
`;

export const CardMedia = styled.button`
  width: 100%;
  aspect-ratio: 16 / 9;
  padding: 0;
  border: 0;
  background: #203039;
  cursor: zoom-in;
  overflow: hidden;

  img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform .3s ease; }
  &:hover img { transform: scale(1.025); }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.8rem 2.8rem 0;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 2.6rem;
  line-height: 1.15;
  letter-spacing: -.025em;
`;

export const CardNumber = styled.span`
  color: ${({ theme }) => theme.colors.accent1};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding: 1.6rem 2.8rem 2.4rem;
`;

export const CardInfo = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.5rem;
  line-height: 1.7;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: .6rem 1.2rem;
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 2.4rem;
  padding: 1.8rem 2.8rem 2.8rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 1.3rem;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent1};
  padding-bottom: .3rem;

  &:hover { color: ${({ theme }) => theme.colors.accent1}; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, .84);
`;

export const ModalContent = styled.div`
  position: relative;
  width: min(900px, 100%);
  max-height: 90vh;
  overflow: auto;
  background: ${({ theme }) => theme.colors.background2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export const ModalImage = styled.img`
  display: block;
  width: 100%;
  max-height: 78vh;
  object-fit: contain;
`;

export const ModalTitle = styled.p`
  padding: 1.2rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background1};
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 2rem;
  cursor: pointer;
`;
