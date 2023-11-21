import { useTranslation } from 'react-i18next';

import type { ArticleBlockType } from '@/entities/Article';
import { ARTICLE_BLOCK_TYPE } from '@/entities/Article';
import type { SelectOption } from '@/shared/ui/Select';
import { Select } from '@/shared/ui/Select';

interface Props {
	value: ArticleBlockType;
	onChange: (option: ArticleBlockType) => void;
}

const options: Array<SelectOption<ArticleBlockType>> = [
	{ value: ARTICLE_BLOCK_TYPE.TEXT, content: 'TEXT' },
	{ value: ARTICLE_BLOCK_TYPE.CODE, content: 'CODE' },
	{ value: ARTICLE_BLOCK_TYPE.IMAGE, content: 'IMAGE' },
];

export const ChooseBlockType = (props: Props) => {
	const { t } = useTranslation();
	const { onChange, value } = props;

	return <Select<ArticleBlockType> onChange={onChange} label={t('Block type')} options={options} value={value} />;
};
