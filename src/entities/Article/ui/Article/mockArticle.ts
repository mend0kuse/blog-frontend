import type { Article } from '../../model/types/ArticleTypes';

export const mockArticle: Article = {
	User: {
		id: '1',
		role: 'admin',
		email: 'admin',
		profile: {},
	},
	ArticleStats: {
		likes: 1,
		dislikes: 1,
	},
	id: 1,
	title: 'Javascript news',
	subtitle: 'Что нового в JS за 2022 год?',
	preview: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 1022,
	createdAt: '26.02.2022',
	types: [{ id: 1, articleId: 1, name: 'IT' }],
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
};
