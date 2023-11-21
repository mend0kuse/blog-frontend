/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
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
			_API_: JSON.stringify(env.API_URL),
		},
	};
});
