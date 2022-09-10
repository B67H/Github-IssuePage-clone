import styles from "./Badge.module.css"
import clsx from "clsx"

export default function Badge({ title, color }) {
  return <span className={clsx(styles.badge, styles[color])}>{title}</span>
}
