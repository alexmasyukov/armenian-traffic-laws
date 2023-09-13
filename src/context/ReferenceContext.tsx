import React, { createContext, useContext, useState } from 'react';

export interface ReferenceContextState {
  from: string;
  to: string;
}

type SetReferenceFunc = (reference: ReferenceContextState) => void;

export interface ReferenceContext {
  reference: ReferenceContextState;
  setReference: SetReferenceFunc;
}

export const ReferenceContext = createContext({} as ReferenceContext);

export const useReference = () => useContext<ReferenceContext>(ReferenceContext);

type ReferenceProviderProps = {
  children: React.ReactNode;
};

export const ReferenceProvider = ({ children }: ReferenceProviderProps) => {
  const [state, setState] = useState<ReferenceContextState>({
    from: '',
    to: '',
  });

  const setReference: SetReferenceFunc = ({ from, to }) => {
    setState({
      from,
      to,
    });
  };

  return (
    <ReferenceContext.Provider
      value={{
        reference: state,
        setReference,
      }}
    >
      {children}
    </ReferenceContext.Provider>
  );
};
