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
		'plugin:react-hooks/recommended',
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
	plugins: ['react', 'prettier', 'i18next', 'fsd-path-checker-mendokuse'],
	rules: {
		'fsd-path-checker-mendokuse/relative-path-checker-fsd': 'error',
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-indent': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-invalid-void-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				disallowTypeAnnotations: false,
			},
		],
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid'],
			},
		],
	},
};
