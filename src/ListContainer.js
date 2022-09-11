import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import { useState } from "react"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import clsx from "clsx"
import Modal from "./components/Modal"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checkedList, setCheckedList] = useState([])
  const [list, setList] = useState([])

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListItemLayout className={styles.listFilter}>
        <ListFilter
          onChangeFilter={(filteredData) => {
            // 필터링된 요소에 맞게 데이터를 불러오기
          }}
        />
      </ListItemLayout>
      <div className={styles.container}>
        {list.map((listItem, idx) => (
          <ListItem
            key={idx}
            checked={checkedList.filter((item) => item.id === "0")[0]}
            onChangeCheckBox={() =>
              setCheckedList((checkedList) => [...checkedList, "0"])
            }
            badges={[{ color: "red", title: "Bug" }]}
          />
        ))}
      </div>
    </div>
  )
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  )
}

function ListFilterItem({ onClick, children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["Bug", "Labels", "Apple"]}
          // onClickCell{() => {
          //   // 클릭된 정보를 통해 리스트 필터링
          //   onChangeFilter()
          // }}
        />
      </div>
    </div>
  )
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true)

  // const data = getData()
  // const openedData = data.filter((d) => d.state === "open")
  // const closedData = data.filter((d) => d.state === "close")

  const openModeDataSize = 1
  const closeModeDataSize = 2
  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={clsx(styles.textFilter, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  )
}
