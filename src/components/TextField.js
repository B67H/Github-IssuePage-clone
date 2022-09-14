import styles from "./TextField.module.css"
import clsx from "clsx"
import { forwardRef } from "react"

export default forwardRef(function TextField({ type = "input", name, placeholder },ref) {
  return type === "input" ? (
    <input
      name={name}
      ref={ref}
      placeholder={placeholder}
      className={clsx(styles.input, styles.border)}
    ></input>
  ) : (
    <textarea
      name={name}
      ref={ref}
      placeholder={placeholder}
      className={clsx(styles.input, styles.textarea, styles.border)}
    ></textarea>
  )
})

// export default forwardRef(TextField)  이렇게도 가능
