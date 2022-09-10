import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItemLayout"

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <ListItemLayout>
      <div role="button" onclick={onClickTitle} className={styles.title}>
        Issue Ex
      </div>
      <div className={styles.description}># descrption</div>
    </ListItemLayout>
  )
}
