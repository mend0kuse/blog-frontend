/* eslint-disable no-useless-return */
import type { JsxAttribute, Node } from 'ts-morph';
import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();

// project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');

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

const isToggleComponent = (node: Node) => {
	let flag = false;
	node.forEachChild((child) => {
		if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'ToggleFeature') {
			flag = true;
		}
	});
	return flag;
};

const removeFunctionFeature = (node: Node) => {
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
};

const getAttributeByName = (name: string, attributes?: JsxAttribute[]) => {
	return attributes?.find((attr) => attr.getName() === name);
};

const removeComponentsFeature = (node: Node) => {
	const objectOptions = node.getFirstDescendantByKind(SyntaxKind.JsxAttributes);

	const attributes = objectOptions?.getChildrenOfKind(SyntaxKind.JsxAttribute);

	const nameProp = getAttributeByName('name', attributes);
	const onProp = getAttributeByName('on', attributes);
	const offProp = getAttributeByName('off', attributes);

	const nameValue = nameProp?.getInitializer()?.getText().slice(1, -1);

	if (nameValue !== featureName) {
		return;
	}

	if (featureFlag === 'on') {
		const body = onProp?.getFirstDescendantByKind(SyntaxKind.JsxExpression);
		node.replaceWithText(body?.getExpression()?.getText() ?? '');
	}

	if (featureFlag === 'off') {
		const body = offProp?.getFirstDescendantByKind(SyntaxKind.JsxExpression);
		node.replaceWithText(body?.getExpression()?.getText() ?? '');
	}
};

project.getSourceFiles().forEach((file) => {
	file.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			removeFunctionFeature(node);
			return;
		}

		if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
			removeComponentsFeature(node);
		}
	});
});

project.save();
