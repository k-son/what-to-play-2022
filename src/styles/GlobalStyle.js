import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background: #e0e0e0;
    background: #3A86FF;
  }

  button:focus {
    ${'' /* outline: 2px solid #00c3ff; */}
  }

  /* used by KeyDownListener and MouseDownListener */
  .intent-mouse button {
    outline: none !important;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme}) => theme.color.backgroundLight};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.color.white};
    border-radius: 15px;
  }
`;