import styles from "./Modal.module.css"
import clsx from "clsx"

export default function Modal({ title, onClose, opened }) {
  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  )
}