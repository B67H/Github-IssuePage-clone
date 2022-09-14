import clsx from "clsx"
import styles from "./CreateIssue.module.css"
import Button from '../components/Button';

export default function CreateIssue() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={clsx(styles.inputWrapper, styles.border)}>
        <input placeholder="Title" className={clsx(styles.input, styles.border)}></input>
        <textarea
        placeholder="Leave a comment"
          className={clsx(styles.input, styles.textarea, styles.border)}
        ></textarea>
        
        <div className={styles.buttonWraaper} >
        <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Submit new issue
            </Button>
        </div>
      </div>
    </div>
  )
}
