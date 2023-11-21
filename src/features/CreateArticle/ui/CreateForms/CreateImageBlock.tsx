import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ARTICLE_BLOCK_TYPE } from '@/entities/Article';
import { AppImage } from '@/shared/ui/AppImage';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';

import type { CreateBlockFn } from '../../model/types';
import styles from '../createArticle.module.scss';

type Props = {
	onCreate: CreateBlockFn;
};
export const CreateImageBlock = (props: Props) => {
	const { onCreate } = props;

	const [selectedImage, setSelectedImage] = useState('');
	const [title, setTitle] = useState('');

	const { t } = useTranslation();

	const addBlock = () => {
		if (!selectedImage) {
			return;
		}

		onCreate({ type: ARTICLE_BLOCK_TYPE.IMAGE, newBlock: { src: selectedImage, title } });

		setSelectedImage('');
		setTitle('');
	};

	const isCorrectUrl = useMemo(() => {
		try {
			const _ = new URL(selectedImage);
			return true;
		} catch {
			return false;
		}
	}, [selectedImage]);

	return (
		<>
			<Input value={title} onChange={setTitle} placeholder={t('Image title')} withoutUpper />

			{isCorrectUrl && (
				<HStack gap={'8'} align={'center'}>
					<AppImage src={selectedImage} className={styles.img} />
				</HStack>
			)}

			<Input value={selectedImage} onChange={setSelectedImage} placeholder={t('Image url')} withoutUpper />

			<Button disabled={!selectedImage} onClick={addBlock}>
				{t('Add image block')}
			</Button>
		</>
	);
};
