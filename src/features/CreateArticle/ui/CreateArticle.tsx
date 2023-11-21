import React, { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type {
	Article,
	ArticleBlockCode,
	ArticleBlockImage,
	ArticleBlockText,
	ArticleBlockType,
	ArticleDto,
	ArticleType,
} from '@/entities/Article';
import { ARTICLE_BLOCK_TYPE, ArticleDetails } from '@/entities/Article';
import { getErrorString } from '@/shared/api/getError';
import { getArticlePageRoute } from '@/shared/config/routes/routes';
import { useToggler } from '@/shared/lib/useToggler';
import { AppImage } from '@/shared/ui/AppImage';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import type { SelectOption } from '@/shared/ui/Select';
import { Select } from '@/shared/ui/Select';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, ThemeText } from '@/shared/ui/Text';

import type { CreateBlockFn, NewArticleBlocks } from '../model/types';
import { useCreateArticle } from '../model/useCreateArticle';
import { ChooseBlockType } from './ChooseBlockType';
import { CreateCodeBlock } from './CreateForms/CreateCodeBlock';
import { CreateImageBlock } from './CreateForms/CreateImageBlock';
import { CreateTextBlock } from './CreateForms/CreateTextBlock';
import styles from './createArticle.module.scss';

interface CreateArticleProps {
	className?: string;
	isEdit?: boolean;
}

const options: Array<SelectOption<ArticleType>> = [
	{ value: 'IT', content: 'IT' },
	{ value: 'Ecology', content: 'Ecology' },
	{ value: 'Science', content: 'Science' },
];

export const CreateArticle = memo((props: CreateArticleProps) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { response, status, createArticle, error, isLoading } = useCreateArticle();

	const [currentBlockType, setCurrentBlockType] = useState<ArticleBlockType>(ARTICLE_BLOCK_TYPE.TEXT);
	const [currentArticleType, setCurrentArticleType] = useState<ArticleType>('IT');
	const [blocks, setBlocks] = useState<NewArticleBlocks>([]);

	const [title, setTitle] = useState('');
	const [previewUrl, setPreviewUrl] = useState('');
	const [subtitle, setSubtitle] = useState('');

	const { value: isOpenPreview, toggleValue } = useToggler();

	const onChangeType = (option: ArticleBlockType) => {
		setCurrentBlockType(option);
	};

	const onAddBlock: CreateBlockFn = ({ type, newBlock }) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		setBlocks((prev) => [...prev, { type, block: newBlock }]);
	};

	const createFormDictionary: Record<ArticleBlockType, React.JSX.Element> = {
		[ARTICLE_BLOCK_TYPE.CODE]: <CreateCodeBlock onCreate={onAddBlock} />,
		[ARTICLE_BLOCK_TYPE.TEXT]: <CreateTextBlock onCreate={onAddBlock} />,
		[ARTICLE_BLOCK_TYPE.IMAGE]: <CreateImageBlock onCreate={onAddBlock} />,
	};

	const currentForm = createFormDictionary[currentBlockType];

	const blocksWithOrder = blocks.map((block, index) => ({ ...block, block: { ...block.block, order: index } }));

	const { imageBlocks, codeBlocks, textBlocks } = useMemo(() => {
		const imageBlocks: ArticleBlockImage[] = [];
		const codeBlocks: ArticleBlockCode[] = [];
		const textBlocks: ArticleBlockText[] = [];

		for (const el of blocksWithOrder) {
			if (el.type === ARTICLE_BLOCK_TYPE.IMAGE) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				imageBlocks.push({ ...el.block });
				continue;
			}

			if (el.type === ARTICLE_BLOCK_TYPE.CODE) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				codeBlocks.push(el.block);
				continue;
			}

			if (el.type === ARTICLE_BLOCK_TYPE.TEXT) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				textBlocks.push(el.block);
			}
		}

		return {
			imageBlocks,
			codeBlocks,
			textBlocks,
		};
	}, [blocksWithOrder]);

	const newArticle: Article = {
		title,
		suptitle: subtitle,
		preview: previewUrl,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		types: [{ name: currentArticleType }],
		imageBlocks,
		textBlocks,
		codeBlocks,
	};

	const onCreate = async () => {
		const result = await createArticle(newArticle);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (result.data) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			navigate(getArticlePageRoute(result.data.id.toString()));
		}
	};

	const isCorrectUrl = useMemo(() => {
		try {
			const _ = new URL(previewUrl);
			return true;
		} catch {
			return false;
		}
	}, [previewUrl]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<VStack gap={'16'}>
				{error && <Text text={getErrorString(error)} theme={ThemeText.ERROR} />}
				<Button onClick={toggleValue}>{t('Open article preview')}</Button>
				<Button theme={ThemeButton.PRIMARY} onClick={onCreate}>
					{t('Create article')}
				</Button>
				<Input value={title} onChange={setTitle} withoutUpper placeholder={t('Article title...')} />
				<Input value={subtitle} onChange={setSubtitle} withoutUpper placeholder={t('Article subtitle...')} />
				<Select<ArticleType>
					onChange={(value) => {
						setCurrentArticleType(value);
					}}
					label={t('Article type')}
					options={options}
					value={currentArticleType}
				/>
				<Text text={t('Preview')} />
				{isCorrectUrl && (
					<HStack gap={'8'} align={'center'}>
						<AppImage src={previewUrl} className={styles.img} />
					</HStack>
				)}
				<Input value={previewUrl} onChange={setPreviewUrl} withoutUpper placeholder={t('Preview url...')} />
				<ChooseBlockType value={currentBlockType} onChange={onChangeType} />
				{currentForm}
			</VStack>
			<Modal
				contentClassName={styles.content}
				className={styles.modal}
				open={isOpenPreview}
				onClose={toggleValue}
			>
				<VStack gap={'8'} className={styles.blocks}>
					<ArticleDetails isLoading={false} article={newArticle as ArticleDto} />
				</VStack>
			</Modal>
		</>
	);
});

CreateArticle.displayName = 'CreateArticle';
