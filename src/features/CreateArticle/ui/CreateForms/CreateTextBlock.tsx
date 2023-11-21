import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ARTICLE_BLOCK_TYPE } from '@/entities/Article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';

import type { CreateBlockFn } from '../../model/types';

interface Props {
	onCreate: CreateBlockFn;
	onChange?: () => void;
}

type Paragraphs = string[];

export const CreateTextBlock = (props: Props) => {
	const { t } = useTranslation();

	const { onCreate, onChange } = props;

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [paragraphs, setParagraphs] = useState<Paragraphs>([]);

	const addParagraph = () => {
		setParagraphs((prev: Paragraphs) => [...prev, text]);
		setText('');
	};

	const addBlock = () => {
		const newBlock = {
			title,
			paragraphs: paragraphs.map((item) => ({
				text: item,
			})),
		};

		setTitle('');
		setText('');
		onCreate({ type: ARTICLE_BLOCK_TYPE.TEXT, newBlock });
	};

	return (
		<VStack gap={'8'}>
			<Input value={title} onChange={setTitle} placeholder={t('Title...')} withoutUpper />
			<HStack gap={'16'} align={'center'}>
				<Input value={text} onChange={setText} placeholder={t('Paragraph...')} withoutUpper />
				<Button theme={ThemeButton.OUTLINE} onClick={addParagraph}>
					{t('Add paragraph')}
				</Button>
			</HStack>
			<Button theme={ThemeButton.OUTLINE} onClick={addBlock}>
				{t('Add text block')}
			</Button>
		</VStack>
	);
};
