import { getUserAuthData } from 'entities/User';
import cn from 'shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { type SidebarItemType } from '../../types/sidebar';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
	const {
		collapsed,
		item: { Icon, path, text, authOnly },
	} = props;

	const { t } = useTranslation();

	const authData = useSelector(getUserAuthData);

	if (!authData && authOnly) {
		return null;
	}

	return (
		<AppLink
			className={cn(styles.link, { [styles.collapsed]: collapsed })}
			theme={AppLinkTheme.SECONDARY}
			to={path}
		>
			<Icon className={styles.icon} />
			<span>{t(text)}</span>
		</AppLink>
	);
});

SidebarItem.displayName = 'SidebarItem';
