import React from 'react';
import { useAppSettings } from '../../context/AppSettings';

type Props = {};

export default function AppSettingsPanel({}: Props) {
  const { updateRulesFontSize } = useAppSettings();
  return (
    <div>
      <button onClick={() => updateRulesFontSize('down')}>-A</button>
      {' '}
      <button onClick={() => updateRulesFontSize('up')}>+A</button>
    </div>
  );
}
