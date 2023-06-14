import { Project } from 'ts-morph';

const project = new Project();

// add source files
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const layers = ['features', 'entities', 'pages', 'shared', 'pages', 'widgets', 'app'];

project.getSourceFiles().forEach((file) => {
	file.getImportDeclarations().forEach((imp) => {
		const from = imp.getModuleSpecifierValue();

		if (layers.some((layer) => from.startsWith(layer))) {
			imp.setModuleSpecifier('@/' + from);
		}
	});
});

project.save();
