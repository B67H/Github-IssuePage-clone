import styles from "./Tabs.module.css"
import cx from "clsx"
import { useState } from "react"

const TabList = ["Code", "Issues", "Pull Request"]

export default function Tabs() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          selected={selectedTabIdx === idx}
          title={tab}
          onClick={() => setSelectedTabIdx(idx)}
        />
      ))}
    </ul>
  )
}

function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}
