import { createGlobalStyle } from 'styled-components';

// Button background Colors
export const buttonDefault = '#E0E0E0';
export const buttonDefaultHover = '#AEAEAE';

export const buttonPrimary = '#3D5AFE';
export const buttonPrimaryHover = '#0039CB';

export const buttonSecondary = '#455A64';
export const buttonSecondaryHover = '#1C313A';

export const buttonDanger = '#D32F2F';
export const buttonDangerHover = '#9A0007';

// Button text colors
export const buttonDefaultTextColor = '#3f3f3f';
export const buttonDisabledTextColor = '#9E9E9E';
export const buttonTextColor = '#FFFFFF';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "'Noto Sans JP', sans-serif;";
  }

  body {
    background-color: #fff;
    -webkit-font-smoothing: antialised;  
  }

  #root {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  span {
    font-family: 'Ubuntu Mono', monospace;
  }

  strong {
    font-weight: 700;
  }

  
`;
