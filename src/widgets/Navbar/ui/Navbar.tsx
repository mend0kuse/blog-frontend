import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cn from "shared/lib/classNames/cn"
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from './Navbar.module.scss';

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.Navbar, {}, className)}>
			<ThemeSwitcher />
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
			</div>
		</div>
	)
}
