import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import webpack from 'webpack';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new MiniCssExtractPlugin({
			filename: 'ccs/[name].[contenthash:8].css',
			chunkFilename: 'ccs/[name].[contenthash:8].css',
		})
	]
}