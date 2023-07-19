import { memo } from 'react';

import type { FeatureFlags } from './setGetFeatureFlags';
import { getFeatureFlag } from './setGetFeatureFlags';

interface ToggleFeatureProps {
	name: keyof FeatureFlags;
	on: JSX.Element;
	off: JSX.Element;
}

export const ToggleFeature = memo((props: ToggleFeatureProps) => {
	const { off, on, name } = props;

	if (getFeatureFlag(name)) {
		return on;
	}

	return off;
});

ToggleFeature.displayName = 'ToggleFeature';
