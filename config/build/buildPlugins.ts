import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { paths, isDev, apiUrl } = options;

	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'ccs/[name].[contenthash:8].css',
			chunkFilename: 'ccs/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			_IS_DEV_: JSON.stringify(isDev),
			_API_: JSON.stringify(apiUrl),
			_PROJECT_: JSON.stringify('frontend'),
		}),
		new CopyPlugin({
			patterns: [{ from: paths.locales, to: paths.buildLocales }],
		}),
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
		}),
	];

	if (isDev) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		);
	}

	return plugins;
}
