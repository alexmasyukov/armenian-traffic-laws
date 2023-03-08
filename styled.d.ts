import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    fontSize: {
      base: string;
      rules: string;
    };
    colors: {
      background: string;
      text: string;
    };
  }
}
