import React, { createContext, useContext } from 'react';
import { AppSettings } from '../types';

export type UpdateFortSizeFunc = (key: keyof AppSettings['fontSize'], direction: 'up' | 'down') => void;
export type setThemeFunc = (theme: AppSettings['theme']) => void;

export interface AppSettingsContext {
  updateFontSize: UpdateFortSizeFunc;
  setTheme: setThemeFunc;
}

interface AppSettingsContextProps extends AppSettingsContext {
  children: React.ReactNode;
}

export const Context = createContext({} as AppSettingsContext);
export const useAppSettings = () => useContext<AppSettingsContext>(Context);

export const AppSettingsProvider = ({ children, ...props }: AppSettingsContextProps) => (
  <Context.Provider value={props}>{children}</Context.Provider>
);
