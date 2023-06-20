import path from 'path';
import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sharedUIPath = path.resolve(__dirname, '..', '..', '..', 'src', 'shared', 'ui');

const uiDir = project.getDirectory(sharedUIPath);
const segments = uiDir?.getDirectories();

segments?.forEach((segment) => {
	const segmentName = segment.getBaseName();
	const indexPath = segment.getSourceFile(`${segment.getPath()}/index.ts`);

	if (!indexPath) {
		segment.createSourceFile('index.ts', `export * from './${segmentName}'`, { overwrite: true });
		segment.save();
	}
});

project.getSourceFiles().forEach((file) => {
	file.getImportDeclarations().forEach((imp) => {
		const from = imp.getModuleSpecifierValue();

		const arrayPath = from.replace('@/', '').split('/');

		const layer = arrayPath[0];
		const segment = arrayPath[1];

		if (layer === 'shared' && segment === 'ui') {
			const newPath = `@/${arrayPath.slice(0, 3).join('/')}`;
			imp.setModuleSpecifier(newPath);
		}
	});
});

project.save();
