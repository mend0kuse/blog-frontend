import { LangSwitcher } from "features/LangSwitcher"
import { ThemeSwitcher } from "features/ThemeSwitcher"
import { FC, HTMLAttributes, useState } from "react"
import cn from "shared/lib/classNames/cn"
import styles from './Sidebar.module.scss'
interface SidebarProps extends HTMLAttributes<HTMLDivElement> { }

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <aside className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, className)}>
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
}


