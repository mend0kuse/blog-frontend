import type { FeatureFlags } from './setGetFeatureFlags';
import { getFeatureFlag } from './setGetFeatureFlags';

interface toggleFeatureProps<C> {
	name: keyof FeatureFlags;
	on: () => C;
	off: () => C;
}

export const toggleFeature = <C>(props: toggleFeatureProps<C>) => {
	const { name, off, on } = props;

	if (getFeatureFlag(name)) {
		return on();
	}

	return off();
};
