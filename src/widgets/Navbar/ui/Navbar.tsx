import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { AppLink, AppLinkTheme } from "shared/lib/AppLink/AppLink";
import cn from "shared/lib/classNames/cn"
import styles from './Navbar.module.scss';

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.Navbar, {}, className)}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
			</div>
		</div>
	)
}
