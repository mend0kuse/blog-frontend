import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cn from "shared/lib/classNames/cn"
import styles from './Navbar.module.scss';

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props
	return (
		<header className={cn(styles.Navbar, {}, className)}>
			<nav className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
			</nav>
		</header>
	)
}
