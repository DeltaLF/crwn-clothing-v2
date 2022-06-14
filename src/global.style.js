import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 20px 40px;
    font-family: 'Open Sans Condensed', sans-serif;
    
    @media screen and (max-width: 800px){
        padding: 10px;
    }

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  /*# sourceMappingURL=index.css.map */
`;
