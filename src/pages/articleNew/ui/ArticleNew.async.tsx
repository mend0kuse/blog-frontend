import { lazy } from 'react';

export const ArticleNewLazy = lazy(async () => await import('./ArticleNew'));
