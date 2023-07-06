import type { Profile } from './../../../src/entities/Profile/model/types/profile';

export const login = (username: string = 'User', password: string = 'asd') => {
	return cy
		.request({
			method: 'POST',
			url: `${Cypress.env('server')}/login`,
			body: {
				username,
				password,
			},
		})
		.then(({ body }: { body: Profile }) => {
			window.localStorage.setItem('user', JSON.stringify(body));
			return body;
		});
};
