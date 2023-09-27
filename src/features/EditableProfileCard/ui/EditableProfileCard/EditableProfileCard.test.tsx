import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { componentRender, type componentRenderOptions } from '@/shared/lib/tests/renderComponent';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const options: componentRenderOptions = {
	initialState: {
		user: {
			authData: {
				email: 'admin@mail.ru',
				avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
				id: '1',
			},
		},
		profile: {
			formData: {
				id: 1,
				name: 'Семён',
				surname: 'Васильев',
				age: '1',
				currency: Currency.RUB,
				country: Country.Russia,
				username: 'admin',
				avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
			},
			readonly: true,
		},
	},
	asyncReducers: {
		profile: profileReducer,
	},
};

describe('EditableProfileCard', () => {
	test('toggle readonly', async () => {
		componentRender(
			<EditableProfileCard profile={options.initialState?.profile?.formData} updateHandler={() => {}} />,
			options,
		);
		await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));
		expect(screen.getByTestId('EditableProfileCard.Cancel')).toBeInTheDocument();

		await userEvent.click(screen.getByTestId('EditableProfileCard.Cancel'));
		expect(screen.getByTestId('EditableProfileCard.Edit')).toBeInTheDocument();
	});

	test('cancel type', async () => {
		componentRender(
			<EditableProfileCard profile={options.initialState?.profile?.formData} updateHandler={() => {}} />,
			options,
		);

		await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));

		const input = screen.getByTestId('ProfileCard.first');

		await userEvent.clear(input);
		await userEvent.type(input, 'asdsadsadsa');
		expect(input).toHaveValue('asdsadsadsa');

		await userEvent.click(screen.getByTestId('EditableProfileCard.Cancel'));
		expect(input).toHaveValue(options.initialState?.profile?.formData?.name);
	});

	test('validation empty firstName', async () => {
		componentRender(
			<EditableProfileCard profile={options.initialState?.profile?.formData} updateHandler={() => {}} />,
			options,
		);

		await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'));

		await userEvent.clear(screen.getByTestId('ProfileCard.first'));
		await userEvent.click(screen.getByTestId('EditableProfileCard.Save'));

		expect(screen.getByTestId('EditableProfileCard.ValidationError')).toBeInTheDocument();
		expect(screen.getByTestId('EditableProfileCard.ValidationError')).toHaveTextContent('Incorrect user data');
	});
});
