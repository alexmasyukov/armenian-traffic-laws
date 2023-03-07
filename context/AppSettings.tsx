import React, { createContext, useContext } from 'react';

export type UpdateRulesFortSizeFunc = (direction: 'up' | 'down') => void;

export interface AppSettingsContext {
  updateRulesFontSize: UpdateRulesFortSizeFunc;
}

export const Context = createContext({} as AppSettingsContext);

export const useAppSettings = () => useContext<AppSettingsContext>(Context);

// const ini = { updateRulesFontSize: () => {} };

interface AppSettingsContextProps extends AppSettingsContext {
  children: React.ReactNode;
}

export const AppSettingsProvider = ({ children, ...props }: AppSettingsContextProps) => (
  <Context.Provider value={props}>{children}</Context.Provider>
);
