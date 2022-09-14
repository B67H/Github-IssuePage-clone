import styles from "./ListContainer.module.css"

import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"

import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import ListFilter from "./components/ListFilter"
import Pagination from "./components/Pagination"
import OpenClosedFilters from "./components/OpenClosedFilters"
import { GITHUB_API } from "./api"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get("page") ?? "1", 10) // pagination 기본값 1로 설정
  const state = searchParams.get("state") // searchParams의 key 값과 일치시켜줌

  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      { params },
    )
    setList(data)
  }

  useEffect(() => {
    getData(searchParams)
  }, [searchParams])

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link to="/new" className={styles.link}>
            <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== "closed"}
          onClickMode={(state) => setSearchParams({ state })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              setSearchParams(params)
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((item) => (
            <ListItem
              data={item}
              key={item.id}
              checked={checked}
              onChangeCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(pageNumber) =>
            setSearchParams({ page: pageNumber })
          }
        />
      </div>
    </>
  )
}
