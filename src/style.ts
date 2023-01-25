import { createGlobalStyle } from "styled-components";

export const COLORS = {
  desaturatedDarkCyan: "hsl(180, 29%, 50%)",
  lightGrayishCyanBg: "hsl(180, 52%, 96%)",
  lightGrayishCyan: "hsl(180, 31%, 95%)",
  darkGrayishCyan: "hsl(180, 8%, 52%)",
  veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
};

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  :root {
    --desaturated-dark-cyan: ${COLORS.desaturatedDarkCyan};
    --light-grayish-cyan-bg: ${COLORS.lightGrayishCyanBg};
    --light-grayish-cyan: ${COLORS.lightGrayishCyan};
    --dark-grayish-cyan: ${COLORS.darkGrayishCyan};
    --very-dark-grayish-cyan: ${COLORS.veryDarkGrayishCyan};
    color-scheme: light;
    color: rgba(255, 255, 255, 0.87);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-family: "League Spartan", sans-serif;
    background-color: var(--light-grayish-cyan-bg);
  }

  img{
    display: flex;
    max-width: 100%;  
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;
