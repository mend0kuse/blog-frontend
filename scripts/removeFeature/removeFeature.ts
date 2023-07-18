import type { Node } from 'ts-morph';
import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();

// project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/MainPage.tsx');

const featureName = process.argv[2];
const featureFlag = process.argv[3];

if (!featureName) {
	throw new Error('Укажите название фичи');
}

if (!featureFlag) {
	throw new Error('Укажите флаг');
}

if (featureFlag !== 'on' && featureFlag !== 'off') {
	throw new Error('Укажите корректный флаг on или off');
}

const isToggleFunction = (node: Node) => {
	let flag = false;
	node.forEachChild((child) => {
		if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
			flag = true;
		}
	});
	return flag;
};

project.getSourceFiles().forEach((file) => {
	file.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
			const name = objectOptions?.getProperty('name');
			const on = objectOptions?.getProperty('on');
			const off = objectOptions?.getProperty('off');

			const nameProperty = name?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);
			const onFunc = on?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
			const offFunc = off?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

			if (nameProperty !== featureName) {
				return;
			}

			if (featureFlag === 'on') {
				const body = onFunc?.getBody().getText() ?? '';
				node.replaceWithText(body);
			}

			if (featureFlag === 'off') {
				const body = offFunc?.getBody().getText() ?? '';
				node.replaceWithText(body);
			}
		}
	});
});

project.save();
