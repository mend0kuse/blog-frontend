import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

type Spring = typeof import('@react-spring/web');
type Gesture = typeof import('@use-gesture/react');

interface AnimationContextData {
	Spring?: Spring;
	Gesture?: Gesture;
	isLoaded?: boolean;
}

const AnimationProviderContext = createContext<AnimationContextData>({});

export const useAnimationLibs = () => {
	return useContext(AnimationProviderContext) as Required<AnimationContextData>;
};

const loadLibs = async () => {
	return await Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const AnimationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [loaded, setLoaded] = useState(false);
	const springRef = useRef<Spring>();
	const gestureRef = useRef<Gesture>();

	useEffect(() => {
		loadLibs().then(([Spring, Gesture]) => {
			springRef.current = Spring;
			gestureRef.current = Gesture;
			setLoaded(true);
		});
	}, []);

	return (
		<AnimationProviderContext.Provider
			value={{
				Gesture: gestureRef.current,
				isLoaded: loaded,
				Spring: springRef.current,
			}}
		>
			{children}
		</AnimationProviderContext.Provider>
	);
};
