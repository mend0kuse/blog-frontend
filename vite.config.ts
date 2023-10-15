/// <reference types="vitest" />
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
	server: {
		port: 8000,
		open: true,
	},
	plugins: [
		svgr({
			exportAsDefault: true,
		}),
		react(),
		tsconfigPaths(),
		checker({
			typescript: true,
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	define: {
		_IS_DEV_: JSON.stringify(true),
		_API_: JSON.stringify('http://localhost:3000'),
		_PROJECT_: JSON.stringify('frontend'),
	},
});
