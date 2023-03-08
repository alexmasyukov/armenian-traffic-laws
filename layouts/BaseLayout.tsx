import React, { useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import AppSettingsPanel from '../components/AppSettingsPanel/AppSettingsPanel';
import { AppSettingsProvider, UpdateFortSizeFunc } from '../context/AppSettings';
import { light, dark, Theme } from '../theme/theme';
import { AppSettingsStore } from '../services/AppSettingsStore';
import { AppSettings } from '../types';
import { GlobalStyles } from '../theme/globalStyles';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  const [styledTheme, setStyledTheme] = React.useState(light);

  useLayoutEffect(() => {
    const fontSize = AppSettingsStore.getFontSize();
    const themeName = AppSettingsStore.getTheme();
    const theme = themeName === 'light' ? light : dark;

    setStyledTheme({
      ...theme,
      fontSize,
    });
  }, []);

  const updateFontSize: UpdateFortSizeFunc = (key = 'base', direction) => {
    const currentFontSize = Number(styledTheme.fontSize?.[key].replace('px', ''));
    const updatedFontSize = direction === 'up' ? `${currentFontSize + 1}px` : `${currentFontSize - 1}px`;

    AppSettingsStore.setFontSize({ [key]: updatedFontSize });

    setStyledTheme({
      ...styledTheme,
      fontSize: {
        ...styledTheme.fontSize,
        [key]: updatedFontSize,
      },
    });
  };

  const setTheme = (themeName: AppSettings['theme']) => {
    const fontSize = AppSettingsStore.getFontSize();
    const theme = themeName === 'light' ? light : dark;

    const updatedTheme: Theme = {
      ...theme,
      fontSize,
    };

    AppSettingsStore.setTheme(themeName);
    setStyledTheme(updatedTheme);
  };

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <AppSettingsProvider {...{ updateFontSize, setTheme }}>
        <AppSettingsPanel />
        <br />
        <Link href='/'>Back to home</Link>
        <br />
        {children}
      </AppSettingsProvider>
    </ThemeProvider>
  );
}
