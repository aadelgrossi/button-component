import { createGlobalStyle } from 'styled-components';

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
    color: #4f4f4f;
    font-size: 24px;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  span {
    font-size: 12px;
    font-family: 'Ubuntu Mono', monospace;
  }

  strong {
    font-weight: 700;
  }

  
`;
