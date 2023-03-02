import { componentRender } from 'shared/lib/tests/renderComponent';

import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter', () => {
	test('render', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 1 } },
		});
		expect(screen.getByTestId('value-title')).toHaveTextContent('1');
	});

	test('counter increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 1 } },
		});
		userEvent.click(screen.getByTestId('incr-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('2');
	});

	test('counter decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 1 } },
		});
		userEvent.click(screen.getByTestId('decr-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('0');
	});
});
