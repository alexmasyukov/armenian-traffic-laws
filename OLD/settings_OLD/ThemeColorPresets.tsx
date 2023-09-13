// import { ReactNode, useMemo } from 'react';
// // @mui
// import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

// import useSettings from '../../hooks/useSettings';
// //
// // import componentsOverride from '../../theme/overrides';

// type Props = {
//   children: ReactNode;
// };

// export default function ThemeColorPresets({ children }: Props) {
//   const defaultTheme = useTheme();

//   const { setColor } = useSettings();

//   const themeOptions = useMemo(
//     () => ({
//       ...defaultTheme,
//       palette: {
//         ...defaultTheme.palette,
//         primary: setColor,
//       },
//       customShadows: {
//         ...defaultTheme.customShadows,
//         // primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
//         primary: `0 27px 48px #8099ef29,inset 0 0 3px #77e7ff1f;`,
//       },
//     }),
//     [setColor, defaultTheme]
//   );

//   const theme = createTheme(themeOptions);

//   // theme.components = componentsOverride(theme);

//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }
