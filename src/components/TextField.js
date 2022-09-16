import styles from "./TextField.module.css"
import clsx from "clsx"
import { forwardRef } from "react"

export default forwardRef(function TextField(
  { type = "input", name, placeholder, onChange, value, error },
  ref,
) {
  return type === "input" ? (
    <input
      onChange={onChange}
      value={value}
      name={name}
      ref={ref}
      placeholder={placeholder}
      className={clsx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
    ></input>
  ) : (
    <textarea
      name={name}
      ref={ref}
      placeholder={placeholder}
      className={clsx(styles.input, styles.textarea, styles.border, {
        [styles.error]: Boolean(error),
      })}
    ></textarea>
  )
})

// export default forwardRef(TextField)  이렇게도 가능
