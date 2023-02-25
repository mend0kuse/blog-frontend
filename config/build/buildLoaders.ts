import type webpack from 'webpack';

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

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const cssLoader = buildCssLoader(options.isDev);
	// Если без ts, то нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
