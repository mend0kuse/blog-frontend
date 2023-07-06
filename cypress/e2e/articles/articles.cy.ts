import { selectByTestId } from '../../helpers/selectByTestId';

describe('Articles', () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit(`/articles`);
		});
	});

	it('render articles', () => {
		cy.get(selectByTestId('ArticleList')).should('exist');
		cy.get(selectByTestId('ArticleListItem')).should('have.length.greaterThan', 3);
	});
});
