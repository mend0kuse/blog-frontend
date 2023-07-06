import { selectByTestId } from '../../helpers/selectByTestId';

describe('Profile', () => {
	beforeEach(() => {
		cy.login().then((data) => {
			cy.visit(`/profile/${data.id}`);
		});
	});

	afterEach(() => {
		cy.request({
			method: 'PUT',
			url: `${Cypress.env('server')}/profile/2`,
			headers: { authorization: 'asdas' },
			body: {
				id: '2',
				first: 'asd',
				lastname: 'asd',
				age: 22,
				currency: 'RUB',
				country: 'Belarus',
				city: 'Irkutsk',
				username: 'sam',
				avatar: 'https://mobimg.b-cdn.net/v3/fetch/3a/3a0b9db20a6f22387ca7a1123827a965.jpeg',
			},
		});
	});

	it('render profile', () => {
		cy.get(selectByTestId('ProfileCard.first')).should('have.value', 'asd');
	});

	it('update profile', () => {
		cy.get(selectByTestId('EditableProfileCard.Edit')).click();
		cy.get(selectByTestId('ProfileCard.first')).clear().type('newName');
		cy.get(selectByTestId('EditableProfileCard.Save')).click();
		cy.get(selectByTestId('ProfileCard.first')).should('have.value', 'newName');
	});
});
