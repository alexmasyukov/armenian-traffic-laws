import { DefaultTheme } from 'styled-components';

type Common = {
  fontSize: DefaultTheme['fontSize'];
};

const common: Common = {
  fontSize: {
    base: '16px',
    rules: '16px',
  },
};

export const light: DefaultTheme = {
  name: 'light',
  ...common,
  colors: {
    background: '#fff',
    text: '#000',
    tooltip: '#444',
    tooltipText: '#fff',
  },
};

export const dark: DefaultTheme = {
  name: 'dark',
  ...common,
  colors: {
    background: '#111',
    text: '#fff',
    tooltip: '#222831',
    tooltipText: '#fff',
  },
};

export type Theme = typeof light | typeof dark;

// borderRadius: '4px',
// palette: {
//   common: {
//     black: '#222831',
//     white: '#ffffff',
//   },
//   primary: {
//     main: '#726a95',
//     contrastText: '#ffffff',
//   },
//   secondary: {
//     main: '#709fb0',
//     contrastText: '#ffffff',
//   },
// },
