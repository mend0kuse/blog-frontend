/* eslint-disable fsd-path-checker-mendokuse/layers-imports */
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/features/EditableProfileCard';
import { type ReducersList } from '@/shared/store/useDinamycModuleLoader';
import { type Story } from '@storybook/react';

const state: DeepPartial<StateSchema> = {
	profile: {
		formData: {
			name: 'Семён',
			surname: 'Васильев',
			age: '1',
			currency: Currency.RUB,
			country: Country.Russia,
			username: 'admin',
			avatar: 'https://i.pinimg.com/564x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
		},
	},
	articles: {
		// @ts-expect-error
		ids: [1],
		entities: {
			1: {
				id: 1,
				title: 'Javascript news',
				subtitle: 'Что нового в JS за 2022 год?',
				preview: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
				views: 1022,
				createdAt: '26.02.2022',
				types: [{ name: 'IT' }],
				textBlocks: [
					{
						id: 1,
						title: 'Заголовок этого блока',
						paragraphs: [
							{
								id: 1,
								text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
							},
						],
					},
					{
						id: 5,
						title: 'Заголовок этого блока',
						paragraphs: [
							{
								id: 2,
								text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
							},
						],
					},
					{
						id: 7,
						title: 'Заголовок этого блока',
						paragraphs: [
							{
								id: 3,
								text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
							},
						],
					},
					{
						id: 9,
						title: 'Заголовок этого блока',
						paragraphs: [
							{
								id: 3,
								text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
							},
						],
					},
				],
				codeBlocks: [
					{
						id: 4,
						code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
					},
					{
						id: 3,
						code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
					},
				],
				imageBlocks: [
					{
						id: 2,
						src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
						title: 'Рисунок 1 - скриншот сайта',
					},
					{
						id: 8,
						src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
						title: 'Рисунок 1 - скриншот сайта',
					},
				],
			},
		},
	},
};

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (Story: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
			<Story />
		</StoreProvider>
	);
};
