import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
  padding: 0;
  margin: 0;


  /* font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
}




/* h1,
h2,
p,
ul {
  margin: 0;
} */

/* ul {
  padding: 0;
  list-style: none;
} */

/* a {
  color: inherit;
}

button {
  padding: 5px;
} */

table {
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    border-bottom: 1px solid #777;

  }
}

`;
