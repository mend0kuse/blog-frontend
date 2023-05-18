import cn from '../../lib/classNames/cn';

describe('cn', () => {
	test('with one class', () => {
		expect(cn('asd')).toBe('asd');
	});
	test('with additional classes', () => {
		expect(cn('asd', {}, 'zxc fsd')).toBe('asd zxc fsd');
	});

	test('with additional classes and mods', () => {
		const expected = 'asd hovered zxc fsd';
		expect(cn('asd', { hovered: true, dis: false }, 'zxc fsd')).toBe(expected);
	});
	test('with additional classes and mod undefined', () => {
		const expected = 'asd hovered zxc fsd';
		expect(cn('asd', { hovered: true, dis: false }, 'zxc fsd')).toBe(expected);
	});
});
