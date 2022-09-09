import styles from "./ListItem.module.css"

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        value={checked}
        onChange={onChangeCheckBox}
      />
      <div>
        <div onclick={onClickTitle} className={styles.title}>
          Issue Ex
        </div>
        <div className={styles.description}># descrption</div>
      </div>
    </div>
  )
}