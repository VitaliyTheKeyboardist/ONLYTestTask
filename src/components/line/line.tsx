import styles from './line.module.scss'

export interface ILine {
    type: 'horizontal' | 'vertical'
}

const Line = ({ type }: ILine) => {
  return (
    <div className={styles[type]}></div>
  )
}

export default Line