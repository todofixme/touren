import { createContext, useContext } from 'react';
import type { Tweaks } from './types';

export const TweaksContext = createContext<Tweaks | null>(null);
export const useTweaksCtx = (): Tweaks | null => useContext(TweaksContext);
