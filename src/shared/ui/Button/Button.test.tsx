import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('button', () => {
	test('render', () => {
		render(<Button>Тест</Button>);
		expect(screen.getByText('Тест')).toBeInTheDocument();
	});
	test('theme', () => {
		render(<Button theme={ThemeButton.CLEAR}>Тест</Button>);
		expect(screen.getByText('Тест')).toHaveClass('clear');
	});
});
