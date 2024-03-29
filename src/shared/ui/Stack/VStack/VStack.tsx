import { type FC } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

interface VStackProps extends Omit<FlexProps, 'direction'> {}

export const VStack: FC<VStackProps> = (props) => {
	return <Flex align='stretch' direction='column' {...props} />;
};
