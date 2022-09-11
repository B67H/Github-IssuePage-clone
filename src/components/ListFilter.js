import { useState } from "react"
import styles from "./ListFilter.module.css"
import Modal from "./Modal"

export default function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState(false)
  const filterList = [
    "Author",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ]

  return (
    <>
      <div className={styles.filterLists}>
        {filterList.map((filter) => (
          <ListFilterItem
            key={filter}
            searchDataList={[]}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </>
  )
}

function ListFilterItem({
  onClick,
  placeholder,
  children,
  onChangeFilter,
  showModal,
  onClose,
}) {
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ▾ 
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          searchDataList={["Bug", "Labels", "Apple"]}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            onChangeFilter()
          }}
        />
      </div>
    </div>
  )
}
