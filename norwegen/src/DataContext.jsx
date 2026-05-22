import { createContext, useContext } from 'react';

/**
 * Enthält alle geladenen Tour-Daten:
 * { tour, stages, lodging, transits, trackSources, hints }
 */
export const DataContext = createContext(null);

/** Hook – in jedem Component nutzbar, solange App in DataContext.Provider liegt. */
export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData() muss innerhalb von DataContext.Provider verwendet werden');
  return ctx;
};
