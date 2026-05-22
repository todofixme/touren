import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import App from './App';
import HomePage     from './pages/HomePage';
import TracksPage   from './pages/TracksPage';
import LodgingPage  from './pages/LodgingPage';
import FerryPage    from './pages/FerryPage';
import HinweisePage from './pages/HinweisePage';

const rootRoute     = createRootRoute({ component: App });
const indexRoute    = createRoute({ getParentRoute: () => rootRoute, path: '/',             component: HomePage });
const tracksRoute   = createRoute({ getParentRoute: () => rootRoute, path: '/tracks',       component: TracksPage });
const lodgingRoute  = createRoute({ getParentRoute: () => rootRoute, path: '/unterkuenfte', component: LodgingPage });
const ferryRoute    = createRoute({ getParentRoute: () => rootRoute, path: '/faehren',      component: FerryPage });
const hinweiseRoute = createRoute({ getParentRoute: () => rootRoute, path: '/hinweise',     component: HinweisePage });

const routeTree = rootRoute.addChildren([
  indexRoute, tracksRoute, lodgingRoute, ferryRoute, hinweiseRoute,
]);

export const router = createRouter({ routeTree, basepath: '/norwegen' });
