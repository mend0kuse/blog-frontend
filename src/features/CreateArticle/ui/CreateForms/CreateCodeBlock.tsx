import * as React from 'react';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ARTICLE_BLOCK_TYPE } from '@/entities/Article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import type { CreateBlockFn } from '../../model/types';
import styles from '../createArticle.module.scss';

type Props = {
	onCreate: CreateBlockFn;
};
export const CreateCodeBlock = (props: Props) => {
	const { onCreate } = props;
	const { t } = useTranslation();

	const [code, setCode] = useState('');

	const addBlock = () => {
		const newBlock = {
			code,
		};

		setCode('');
		onCreate({ type: ARTICLE_BLOCK_TYPE.CODE, newBlock });
	};

	const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setCode(e.target.value);
	};

	return (
		<VStack>
			<textarea className={styles.code} value={code} onChange={onChange} placeholder={t('Code...') ?? ''} />

			<Button theme={ThemeButton.OUTLINE} onClick={addBlock}>
				{t('Add code block')}
			</Button>
		</VStack>
	);
};
