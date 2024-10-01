import Dot from "../../components/dot/dot"
import styles from "./circle.module.scss"

const Circle = () => {
  const mock = [1, 2, 3, 4]
  return (
    <div className={styles.circle}>
      {mock.map((index) => {
        const length = mock.length
        const deg = 360 / length
        const rotate = deg * index

        return (
          <div className={styles.item} style={{ rotate: `${rotate}deg` }}>
            <Dot style={`-${rotate}deg`}/>
          </div>
        )
      })}
      {/* <div className={styles.item}>
        <Dot />
      </div>
      <div className={styles.item}>
        <Dot />
      </div>
      <div className={styles.item}>
        <Dot />
      </div>
      <div className={styles.item}>
        <Dot />
      </div>
      <div className={styles.item}>
        <Dot />
      </div>
      <div className={styles.item}>
        <Dot />
      </div> */}
    </div>
  )
}

export default Circle
