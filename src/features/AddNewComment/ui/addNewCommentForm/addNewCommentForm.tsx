import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
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
	onSend: (text: string) => void;
	disabled: boolean;
}

const AddNewCommentForm: FC<AddNewCommentFormProps> = (props) => {
	const { onSend, disabled } = props;
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
		if (!text) {
			return;
		}

		onSend(text);
		dispatch(addNewCommentActions.setText(''));
	}, [dispatch, onSend, text]);

	return (
		<HStack align='center' justify='between' className={cn(styles.addNewCommentForm)}>
			<Input
				withoutUpper
				className={styles.field}
				value={text}
				onChange={onChangeHandler}
				data-testid='AddComment.Input'
				placeholder={t('Enter text')}
			/>
			<Button disabled={disabled} data-testid='AddComment.Send' onClick={onSendHandler}>
				{t('Send')}
			</Button>
		</HStack>
	);
};

AddNewCommentForm.displayName = 'AddNewCommentForm';
export default memo(AddNewCommentForm);
