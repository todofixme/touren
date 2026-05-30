import { createContext, useContext } from 'react';
import type { AppData } from './types';

export const DataContext = createContext<AppData | null>(null);

export const useData = (): AppData => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData() muss innerhalb von DataContext.Provider verwendet werden');
  return ctx;
};
