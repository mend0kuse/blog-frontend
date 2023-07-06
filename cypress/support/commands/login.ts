export const login = (username: string = 'User', password: string = 'asd') => {
	cy.log(`Logging in as ${username}`);
	cy.request({
		method: 'POST',
		url: `${Cypress.env('server')}/login`,
		body: {
			username,
			password,
		},
	}).then(({ body }) => {
		window.localStorage.setItem('user', JSON.stringify(body));
	});
};
