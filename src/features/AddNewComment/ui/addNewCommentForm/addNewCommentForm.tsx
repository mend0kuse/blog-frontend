import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { type ReducersList, useDinamycModuleLoader } from '@/shared/hooks/useDinamycModuleLoader';
import cn from '@/shared/lib/classNames/cn';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';

import { getNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import styles from './addNewCommentForm.module.scss';

const reducers: ReducersList = {
	addNewComment: addNewCommentReducer,
};

export interface AddNewCommentFormProps {
	className?: string;
	onSend: (text: string) => void;
}

const AddNewCommentForm: FC<AddNewCommentFormProps> = (props) => {
	const { className, onSend } = props;
	const { t } = useTranslation('');

	const dispatch = useDispatch();
	const text = useSelector(getNewCommentText);

	useDinamycModuleLoader(reducers);

	const onChangeHandler = useCallback(
		(value: string) => {
			dispatch(addNewCommentActions.setText(value));
		},
		[dispatch],
	);

	const onSendHandler = useCallback(() => {
		if (text) {
			onSend(text);
			dispatch(addNewCommentActions.setText(''));
		}
	}, [dispatch, onSend, text]);

	return (
		<HStack align='center' justify='between' className={cn(styles.addNewCommentForm, {}, className)}>
			<Input
				withoutUpper
				className={styles.field}
				value={text}
				onChange={onChangeHandler}
				placeholder={t('Enter text')}
			/>
			<Button onClick={onSendHandler}>{t('Send')}</Button>
		</HStack>
	);
};

AddNewCommentForm.displayName = 'AddNewCommentForm';
export default memo(AddNewCommentForm);
