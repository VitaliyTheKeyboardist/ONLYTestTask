import YearsCounter from "../../components/yearsCounter/yearsCounter"
import styles from "./counterBlock.module.scss"

const CounterBlock = () => {
  return (
    <div className={styles.сounterBlock}>
      <YearsCounter type="primary" content={2015} />
      <YearsCounter type="secondary" content={2022} />
    </div>
  )
}

export default CounterBlock
