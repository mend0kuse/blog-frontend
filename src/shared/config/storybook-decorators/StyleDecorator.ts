/* eslint-disable fsd-path-checker-mendokuse/layers-imports */
import '@/app/styles/index.scss';
import { type Story } from '@storybook/react';

import './moc-themes.scss';

export const StyleDecorator = (story: () => Story) => story();
