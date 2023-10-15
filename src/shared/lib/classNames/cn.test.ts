import cn from '../../lib/classNames/cn';

describe('cn', () => {
	test('with one class', () => {
		expect(cn('asd')).toBe('asd');
	});

	test('with additional classes', () => {
		expect(cn('asd', 'zxc', 'fsd')).toBe('asd zxc fsd');
	});

	test('with additional classes and mods', () => {
		const expected = 'asd zxc fsd hovered';
		expect(cn('asd', { hovered: true, dis: false }, 'zxc', 'fsd')).toBe(expected);
	});

	test('with mods', () => {
		const expected = 'asd hovered';
		expect(cn('asd', { hovered: true, dis: false })).toBe(expected);
	});
});
