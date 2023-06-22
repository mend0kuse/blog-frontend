export const imageLoadingMock = () => {
	type ImageConstructor = new (width?: number | undefined, height?: number | undefined) => HTMLImageElement;

	global.Image = class {
		onload: () => void;

		constructor() {
			this.onload = jest.fn();
			setTimeout(() => {
				this.onload();
			}, 50);
		}
	} as unknown as ImageConstructor;
};
