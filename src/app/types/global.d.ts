declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg' {
	import type React from 'react';
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare const _API_: string;

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;
