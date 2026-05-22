import { createContext, useContext } from 'react';

export const TweaksContext = createContext(null);
export const useTweaksCtx = () => useContext(TweaksContext);
