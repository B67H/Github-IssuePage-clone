import styles from "./Header.module.css"

import Space from "./components/Space"
import Button from "./components/Button"
import Tabs from "./components/Tabs"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <div className={styles.pageName}>B6H7 / &nbsp;<span> github-issue-ex</span></div>
        <div className={styles.buttons}>
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Watch
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Fork <div className={styles.circle}>5</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Star
          </Button>
        </div>
      </div>
      <Tabs title="title" number={5} />
    </div>
  )
}
