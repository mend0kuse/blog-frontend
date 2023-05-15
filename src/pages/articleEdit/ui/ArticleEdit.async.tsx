import { lazy } from 'react';

export const ArticleEditLazy = lazy(async () => await import('./ArticleEdit'));
