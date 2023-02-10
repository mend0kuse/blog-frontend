import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { type BuildOptions } from './types/config';

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
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
		}),
	];
}
