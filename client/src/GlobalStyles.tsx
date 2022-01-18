import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  body {
    color: #4e4e4e;
    margin: 0;
    font-family: 'Comfortaa', cursive, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`
export default GlobalStyles
