import { BuildOptions } from './types/config';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		hot: true,
		open: true,
		historyApiFallback: true
	}
}