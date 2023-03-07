import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppSettingsPanel from '../components/AppSettingsPanel/AppSettingsPanel';
import { AppSettingsProvider, UpdateRulesFortSizeFunc } from '../context/AppSettings';
import { defaultTheme } from '../theme/defaultTheme';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  const [theme, setTheme] = React.useState(defaultTheme);

  const updateRulesFontSize: UpdateRulesFortSizeFunc = (direction) => {
    let fontSize = Number(theme.rules.fontSize.replace('px', ''));

    if (direction === 'up') {
      fontSize += 1;
    } else {
      fontSize -= 1;
    }

    setTheme({
      ...theme,
      rules: {
        ...theme.rules,
        fontSize: `${fontSize}px`,
      },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppSettingsProvider updateRulesFontSize={updateRulesFontSize}>
        <AppSettingsPanel />
        {children}
      </AppSettingsProvider>
    </ThemeProvider>
  );
}
