import Arrow from "../../components/arrow/arrow"
import styles from "./navigateBlock.module.scss"

const NavigateBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>06/06</div>
      <div className={styles.buttonsBlock}>
        <Arrow type="left" isActive={true} />
        <Arrow type="right" isActive={false} />
      </div>
    </div>
  )
}

export default NavigateBlock
