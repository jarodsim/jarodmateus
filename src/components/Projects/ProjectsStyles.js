import styled, { keyframes } from 'styled-components';

/* ─── Animations ─────────────────────────────────────────────────── */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(24px) scale(0.97); opacity: 0; }
  to   { transform: translateY(0)    scale(1);    opacity: 1; }
`;

/* ─── Grid ───────────────────────────────────────────────────────── */
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
  }
`;

/* ─── Card ───────────────────────────────────────────────────────── */
export const BlogCard = styled.div`
  border-radius: 16px;
  background: linear-gradient(160deg, #141d2f 0%, #0f1624 100%);
  border: 1px solid rgba(156, 201, 227, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.5);
    border-color: rgba(156, 201, 227, 0.28);
  }
`;

export const CardStripe = styled.div`
  height: 5px;
  background: linear-gradient(90deg, #9cc9e3 0%, #d0bb57 100%);
  flex-shrink: 0;
`;

/* ─── Card Header ────────────────────────────────────────────────── */
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 2.2rem 1rem;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #9cc9e3;
  line-height: 1.3;
  flex: 1;
`;

export const CardNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(208, 187, 87, 0.5);
  flex-shrink: 0;
  margin-top: 0.3rem;
  font-family: monospace;
`;

/* ─── Card Body ──────────────────────────────────────────────────── */
export const CardBody = styled.div`
  padding: 0 2.2rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CardInfo = styled.p`
  color: #b0bec5;
  font-size: 1.45rem;
  line-height: 1.75;
`;

/* ─── Tags ───────────────────────────────────────────────────────── */
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Tag = styled.li`
  font-size: 1.15rem;
  font-weight: 500;
  color: #9cc9e3;
  padding: 0.3rem 0.9rem;
  background: rgba(156, 201, 227, 0.08);
  border: 1px solid rgba(156, 201, 227, 0.18);
  border-radius: 20px;
`;

/* ─── Divider ────────────────────────────────────────────────────── */
export const Hr = styled.hr`
  border: none;
  height: 1px;
  background: rgba(156, 201, 227, 0.08);
  margin: 0 2.2rem;
`;

/* ─── Card Footer ────────────────────────────────────────────────── */
export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 2.2rem;
  background: rgba(0, 0, 0, 0.18);
`;

export const ExternalLinks = styled.a`
  font-size: 1.35rem;
  font-weight: 500;
  color: #d4c0c0;
  padding: 0.55rem 1.3rem;
  background: #6b3030;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.22s ease, transform 0.2s ease;

  &:hover {
    background: #8a1e1e;
    transform: translateY(-1px);
  }
`;

export const PreviewButton = styled.button`
  font-size: 1.35rem;
  font-weight: 500;
  color: #d0bb57;
  padding: 0.55rem 1.3rem;
  background: rgba(208, 187, 87, 0.08);
  border: 1px solid rgba(208, 187, 87, 0.28);
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.2s ease;

  &:hover {
    background: rgba(208, 187, 87, 0.18);
    border-color: rgba(208, 187, 87, 0.55);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #d0bb57;
    outline-offset: 2px;
  }
`;

/* ─── Modal ──────────────────────────────────────────────────────── */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 32px 96px rgba(0, 0, 0, 0.7);
  animation: ${slideUp} 0.25s ease;
  background: #0a0e1a;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 82vh;
  object-fit: contain;
  display: block;
`;

export const ModalTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 2.4rem 2rem 1.4rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:focus-visible {
    outline: 2px solid #9cc9e3;
    outline-offset: 2px;
  }
`;