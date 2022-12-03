import { createContext } from 'react';
import { ContextType } from '../@types/user';

const context = createContext<ContextType | null>(null);

export default context;