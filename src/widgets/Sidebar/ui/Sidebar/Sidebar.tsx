import { FC, HTMLAttributes, useState } from "react"
import cn from "shared/lib/classNames/cn"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import styles from './Sidebar.module.scss'
interface SidebarProps extends HTMLAttributes<HTMLDivElement>{}

export const Sidebar:FC<SidebarProps> = ({ className }) => {
  const [collapsed,setCollapsed] = useState(false)

  const onToggle = () =>{
    setCollapsed(prev=>!prev)
  }
  return (
    <aside className={cn(styles.Sidebar, {[styles.collapsed]:collapsed}, className)}>
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.swithers}>
			  <ThemeSwitcher />
      </div>
    </aside>
  )
}


