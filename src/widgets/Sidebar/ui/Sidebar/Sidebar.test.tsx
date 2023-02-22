import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
	});
	test('collapsed', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('Sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
	});
});
