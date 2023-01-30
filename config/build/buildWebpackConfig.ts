import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode } = options
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			clean: true,
			path: paths.build,
			filename: '[name].[hash].js',
		},
		module: {
			rules: buildLoaders()
		},
		resolve: buildResolves(),
		plugins: buildPlugins(options)
	}
}