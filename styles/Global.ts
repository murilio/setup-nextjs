import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --dark-isca: #223365;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #__next {
    min-height: 100vh;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #333;
    font-family: 'Noto Sans', sans-serif;
  }

  h1 {
    font-size: 3.5em;
  }

`

export default GlobalStyle
