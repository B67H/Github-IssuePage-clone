import styles from "./Tabs.module.css"
import cx from "clsx"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const TabList = [
  { name: "Code", pathname: "/code" },
  { name: "Issues", pathname: "/issues" },
  { name: "Pull Reques", pathname: "/pulls" },
  { name: "Actions", pathname: "/actions" },
  { name: "Projects", pathname: "/projects" },
  { name: "Security", pathname: "/security" },
]

export default function Tabs() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  const { pathname } = useLocation()

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, idx) => (
        <Tab
          key={idx}
          selected={pathname === tab.pathname}
          item={tab}
          onClick={() => setSelectedTabIdx(idx)}
        />
      ))}
    </ul>
  )
}

function Tab({ item, title, selected, onClick, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button
          onClick={onClick}
          className={cx(styles.tab, { [styles.selected]: selected })}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  )
}
