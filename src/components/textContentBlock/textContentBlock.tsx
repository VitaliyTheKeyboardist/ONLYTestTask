import styles from "./textContentBlock.module.scss"

const TextContentBlock = () => {
  return (
    <div className={styles.textContentBlock}>
      <div className={styles.date}>2018</div>
      <div className={styles.text}>
        Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
        галактик, получившую обозначение GN-z11
      </div>
    </div>
  )
}

export default TextContentBlock
