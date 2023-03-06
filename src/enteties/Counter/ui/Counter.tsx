import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { Button } from 'shared/ui/Button/Button';

import { t } from 'i18next';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

export const Counter: FC = () => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const value = useSelector(getCounterValue);

	const incr = () => {
		dispatch(counterActions.increment());
	};

	const decr = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid='value-title'>{value}</h1>
			<Button data-testid='incr-btn' onClick={incr}>
				{t('incr')}
			</Button>
			<Button data-testid='decr-btn' onClick={decr}>
				{t('decr')}
			</Button>
		</div>
	);
};
