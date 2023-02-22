import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { render, screen } from '@testing-library/react';

describe('button', () => {
	test('render', () => {
		render(<Button>Тест</Button>);
		expect(screen.getByTestId('Button')).toBeInTheDocument();
	});
	test('theme', () => {
		render(<Button theme={ThemeButton.CLEAR}>Тест</Button>);
		expect(screen.getByTestId('Button')).toHaveClass('clear');
	});
});
