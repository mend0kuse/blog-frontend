import { lazy } from 'react';

export const ForbiddenPageLazy = lazy(async () => await import('./ForbiddenPage'));
