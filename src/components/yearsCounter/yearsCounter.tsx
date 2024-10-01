import styles from './yearsCounter.module.scss'

export interface IYearsCounter {
    type: "primary" | "secondary"
    content: number
}

const YearsCounter = ({ type, content }: IYearsCounter) => {
  return (
    <div className={styles[type]}>{content}</div>
  )
}

export default YearsCounter