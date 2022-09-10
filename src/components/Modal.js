import { useEffect, useState } from "react"
import styles from "./Modal.module.css"

import clsx from "clsx"

export default function Modal({
  title,
  onClose,
  opened,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchvalue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState(searchDataList)

  useEffect(() => {
    setFilteredData(searchDataList.filter((item) => item === searchvalue))
  }, [searchDataList, searchvalue])

  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchvalue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div key={data} onClick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  )
}
