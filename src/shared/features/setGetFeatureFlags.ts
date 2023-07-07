export interface FeatureFlags {
	isRatingEnabled?: boolean;
}

let featureFlags: FeatureFlags;

export const setFeatureFlags = (flags: FeatureFlags) => {
	featureFlags = flags;
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
	return featureFlags[flag];
};
