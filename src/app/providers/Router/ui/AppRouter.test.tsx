import { imageLoadingMock } from '@/shared/lib/tests/mocks/imageLoadingMock';
import { mockIntersection } from '@/shared/lib/tests/mocks/intersectionObserver';
import { resizeObserverMock } from '@/shared/lib/tests/mocks/resizeObserverMock';
import { componentRender } from '@/shared/lib/tests/renderComponent';
import { Navbar } from '@/widgets/Navbar';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppRouter } from './AppRouter';

mockIntersection();
imageLoadingMock();
resizeObserverMock();

describe('AppRouter', () => {
	test('Страница рендерится', async () => {
		componentRender(<AppRouter />, { route: '/about' });

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});

	test('Страница не найдена', async () => {
		componentRender(<AppRouter />, { route: '/фывыффвыыфыв' });

		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});

	test('Не авторизован', async () => {
		componentRender(<AppRouter />, { route: '/articles' });

		const page = await screen.findByTestId('MainPage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ запрещен', async () => {
		componentRender(<AppRouter />, {
			route: '/admin',
			initialState: {
				user: { _init: true, authData: {} },
			},
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});

	test('Заходит админ', async () => {
		componentRender(<AppRouter />, {
			route: '/admin',
			initialState: {
				user: { _init: true, authData: { role: ['Admin'] } },
			},
		});

		const page = await screen.findByTestId('AdminPage');
		expect(page).toBeInTheDocument();
	});

	test('Пользователь выходит с аккаунта на странице articles', async () => {
		componentRender(
			<>
				<Navbar />
				<AppRouter />
			</>,
			{
				route: '/articles',
				initialState: {
					user: { _init: true, authData: {} },
				},
			},
		);

		await screen.findByTestId('ArticlesPage');

		const profile = await screen.findByTestId('UserAvatar');
		await userEvent.click(profile);

		const logout = await screen.findByText('Выйти');
		await userEvent.click(logout);

		const mainPage = await screen.findByTestId('MainPage');
		expect(mainPage).toBeInTheDocument();
	});
});
