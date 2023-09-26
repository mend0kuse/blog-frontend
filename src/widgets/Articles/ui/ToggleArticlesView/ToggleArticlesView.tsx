import { type FC, memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import cn from '@/shared/lib/classNames/cn';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import styles from './ToggleArticlesView.module.scss';

interface ToggleArticlesViewProps {
	className?: string;
	selected?: ArticleView;
	onClick: (view: ArticleView) => void;
}

const views = [
	{
		icon: ListIcon,
		view: ArticleView.LIST,
	},
	{
		icon: TileIcon,
		view: ArticleView.TILE,
	},
];

export const ToggleArticlesView: FC<ToggleArticlesViewProps> = memo((props) => {
	const { className, onClick, selected } = props;

	return (
		<HStack align='center' gap='8' className={cn(styles.toggleArticlesView, {}, className)}>
			{views.map(({ icon, view }) => (
				<Button
					onClick={() => {
						onClick(view);
					}}
					key={view}
					theme={ThemeButton.CLEAR}
				>
					<Icon className={cn(styles.icon, { [styles.selected]: selected === view })} SVG={icon} />
				</Button>
			))}
		</HStack>
	);
});

ToggleArticlesView.displayName = 'ToggleArticlesView';
