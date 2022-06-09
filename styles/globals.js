import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:root{
    --background-color: #bde0fe;
    --color-primary:#0077b6;
    --color-second: #ff006e;
    --color-third: #f5f3f4;
    --color-fourth: #e9ecef;
}

body{
    background-color: var(--background-color);
    font-family: "Popins", sans-serif;
}

`;
