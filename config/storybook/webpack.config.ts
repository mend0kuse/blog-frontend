import path from 'path';
import type webpack from 'webpack';
import { DefinePlugin, type RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { type BuildPaths } from './../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
		buildLocales: '',
		locales: '',
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	if (config.resolve?.alias) {
		config.resolve.alias = {
			'@': paths.src,
		};
	}

	if (config.module?.rules) {
		// eslint-disable-next-line
		// @ts-ignore
		config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
			// eslint-disable-next-line @typescript-eslint/prefer-includes
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});
	}

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});

	config.module?.rules?.push(buildCssLoader(true));

	config.plugins?.push(
		new DefinePlugin({
			_IS_DEV_: true,
			_API_: JSON.stringify('http://localhost:8000'),
			_PROJECT_: JSON.stringify('storybook'),
		}),
	);

	return config;
};
