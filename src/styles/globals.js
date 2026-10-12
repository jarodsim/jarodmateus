import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: Glacial;
    src: url('/fonts/Glacial/GlacialIndifference-Regular.otf') format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: Glacial;
    src: url('/fonts/Glacial/GlacialIndifference-Bold.otf') format('opentype');
    font-weight: 700;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent1};
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }

`;

export default GlobalStyles;
