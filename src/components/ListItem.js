import Badge from "./Badge"
import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItemLayout"

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  badges,
}) {
  return (
    <ListItemLayout>
      <div role="button" onclick={onClickTitle} className={styles.title}>
        Issue Ex
        {badges &&
          badges.map((badgeProps, idx) => <Badge key={idx} {...badgeProps} />)}
      </div>
      <div className={styles.description}># descrption</div>
    </ListItemLayout>
  )
}
