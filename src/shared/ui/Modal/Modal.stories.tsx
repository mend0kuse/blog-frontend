import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Open = Template.bind({});
Open.args = {
	children: 'Text Text Text Text Text Text Text',
	open: true,
};
