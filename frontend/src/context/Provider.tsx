import React, { useState, FC } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { IUser } from '../@types/user';

type ContextProviderProps = {
    children: React.ReactNode
}

function Provider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const context = {
    user
  };
  
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}


export default Provider;