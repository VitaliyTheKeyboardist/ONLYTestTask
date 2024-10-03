import ArrowRightActive from "../../assets/icons/ArrowRightActive.svg"
import ArrowLeftActive from "../../assets/icons/ArrowLeftActive.svg"
import ArrowLeft from "../../assets/icons/ArrowLeft.svg"
import ArrowRight from "../../assets/icons/ArrowRight.svg"

import styles from "./arrow.module.scss"

export interface IArrow {
  type: "left" | "right"
  isActive: boolean
}

const Arrow = ({ type, isActive }: IArrow) => {
  if (type === "left")
    return (
      <>
        {isActive ? (
          <img
            className={styles.image}
            src={ArrowLeftActive}
            alt="стрелка навигации"
          />
        ) : (
          <img
            className={styles.image}
            src={ArrowLeft}
            alt="стрелка навигации"
          />
        )}
      </>
    )
  else
    return (
      <>
        {isActive ? (
          <img
            className={styles.image}
            src={ArrowRightActive}
            alt="стрелка навигации"
          />
        ) : (
          <img
            className={styles.image}
            src={ArrowRight}
            alt="стрелка навигации"
          />
        )}
      </>
    )
}

export default Arrow
