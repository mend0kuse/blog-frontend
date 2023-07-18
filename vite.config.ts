import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	plugins: [
		svgr({
			exportAsDefault: true,
		}),
		react(),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: '/src',
			},
		],
	},
	define: {
		_IS_DEV_: JSON.stringify(true),
		_API_: JSON.stringify('http://localhost:8000'),
		_PROJECT_: JSON.stringify('frontend'),
	},
});
