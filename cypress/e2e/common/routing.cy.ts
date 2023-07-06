import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
	describe('не авторизован', () => {
		it('main page', () => {
			cy.visit('http://localhost:3000');
			cy.get(selectByTestId('MainPage')).should('exist');
		});

		it('not found', () => {
			cy.visit('http://localhost:3000/asdadsads');
			cy.get(selectByTestId('NotFoundPage')).should('exist');
		});

		it('not auth', () => {
			cy.visit('http://localhost:3000/articles');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
	});

	describe('Авторизован', () => {
		it('forbidden', () => {
			cy.login();
			cy.visit('/admin');
			cy.get(selectByTestId('ForbiddenPage')).should('exist');
		});

		it('admin', () => {
			cy.login('admin', '123');
			cy.visit('/admin');
			cy.get(selectByTestId('AdminPage')).should('exist');
		});

		it('logout on articles page', () => {
			cy.login('admin', '123');
			cy.visit('/articles');
			cy.get(selectByTestId('UserAvatar')).click();
			cy.contains('Выйти').click();
			cy.get(selectByTestId('MainPage')).should('exist');
		});
	});
});
