import { ArticleView } from 'enteties/Article';
import ListIcon from 'shared/assets/icons/list.svg';
import TileIcon from 'shared/assets/icons/tile.svg';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import { type FC, memo } from 'react';

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
		<div className={cn(styles.toggleArticlesView, {}, className)}>
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
		</div>
	);
});

ToggleArticlesView.displayName = 'ToggleArticlesView';
