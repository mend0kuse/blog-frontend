import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18nTests';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const { route = '/', initialState, asyncReducers } = options;

	return render(
		<StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18n}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>,
	);
}
