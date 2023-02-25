module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			files: ['*.test.tsx'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: ['react', 'prettier', 'i18next'],
	rules: {
		'react/jsx-indent': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid'],
			},
		],
	},
};
