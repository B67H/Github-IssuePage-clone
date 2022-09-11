import styles from "./OpenClosedFilters.module.css"

import clsx from "clsx"

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  // const openModeDataSize = 1
  // const closeModeDataSize = 2

  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state={'Open'}
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state={'Closed'}
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
      />
    </>
  )
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={clsx(styles.textFilter, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  )
}
