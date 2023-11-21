import type { ArticleDto } from '../../model/types/ArticleTypes';

export const mockArticle: ArticleDto = {
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
			title: 'Заголовок этого блока',
			paragraphs: [
				{
					text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				},
			],
		},
		{
			title: 'Заголовок этого блока',
			paragraphs: [
				{
					text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				},
			],
		},
		{
			title: 'Заголовок этого блока',
			paragraphs: [
				{
					text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				},
			],
		},
		{
			title: 'Заголовок этого блока',
			paragraphs: [
				{
					text: 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
				},
			],
		},
	],
	codeBlocks: [
		{
			code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
		},
		{
			code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
		},
	],
	imageBlocks: [
		{
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			title: 'Рисунок 1 - скриншот сайта',
		},
		{
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			title: 'Рисунок 1 - скриншот сайта',
		},
	],
};
