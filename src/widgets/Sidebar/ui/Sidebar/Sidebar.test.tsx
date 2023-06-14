import { componentRender } from '@/shared/lib/tests/renderComponent';

import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('render', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
	});
	test('collapsed', () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId('Sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
	});
});
