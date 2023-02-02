import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module')),
						localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
					},
				}
			},
			"sass-loader",
		],
	}

	// Если без ts, то нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typescriptLoader, cssLoader
	]
}