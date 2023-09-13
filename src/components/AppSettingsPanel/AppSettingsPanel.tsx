import React from 'react';
import { useAppSettings } from '../../context/AppSettings';

export default function AppSettingsPanel() {
  const { updateFontSize, setTheme } = useAppSettings();

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      {' '}
      <button onClick={() => setTheme('dark')}>Dark</button>
      <br />
      Приложение:
      <button onClick={() => updateFontSize('base', 'down')}>-A</button>
      {' '}
      <button onClick={() => updateFontSize('base', 'up')}>+A</button>
      <br />
      Правила:
      <button onClick={() => updateFontSize('rules', 'down')}>-A</button>
      {' '}
      <button onClick={() => updateFontSize('rules', 'up')}>+A</button>
    </div>
  );
}
