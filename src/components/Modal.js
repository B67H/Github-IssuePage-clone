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
    setFilteredData(searchDataList)
  }, [searchDataList])

  useEffect(() => {
    if (searchvalue === "") {
      setFilteredData(searchDataList)
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchvalue.toLowerCase()),
      )
      setFilteredData(filteredSearchList)
    }
  }, [searchDataList, searchvalue])

  // useEffect(() => {
  //   setFilteredData(searchDataList.filter((item) => item === searchvalue))
  // }, [searchDataList, searchvalue])

  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchvalue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            key={data.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === "label"
              const paramKey = isLabel ? "labels" : title.toLowerCase()
              onClickCell({ [paramKey]: data.name })
            }}
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  )
}
