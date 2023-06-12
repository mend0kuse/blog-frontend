import type webpack from 'webpack';

import removePropsBabelPlugin from '../babel/removePropsBabelPlugin';
import { buildCssLoader } from './loaders/buildCssLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: ['file-loader'],
	};

	const codeBabelLoader = {
		test: /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env', ['@babel/preset-typescript', { isTsx: false }]],
			},
		},
	};

	const tsxBabelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				plugins: [[removePropsBabelPlugin, { props: ['data-testid'] }]],
				presets: ['@babel/preset-env', ['@babel/preset-typescript', { isTsx: true }]],
			},
		},
	};

	const cssLoader = buildCssLoader(options.isDev);

	return [codeBabelLoader, tsxBabelLoader, cssLoader, svgLoader, fileLoader];
}
