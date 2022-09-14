import clsx from "clsx"
import styles from "./CreateIssue.module.css"
import Button from "../components/Button"
import { useRef } from "react"
import TextField from "../components/TextField"

export default function CreateIssue() {
  const ref = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target.elements.title.value === "") {
      alert("타이틀을 입력해 주세요")
      ref.current.focus()
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={clsx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField ref={ref} name="title" placeholder="Title" />
          <TextField
            type="textarea"
            name="body"
            placeholder="Leave a comment"
          />
          <div className={styles.buttonWraaper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
