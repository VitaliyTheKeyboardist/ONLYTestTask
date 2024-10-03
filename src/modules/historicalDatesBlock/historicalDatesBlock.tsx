import NavigateBlock from "../navigateBlock/navigateBlock"
import Slider from "../slider/slider"

import styles from "./historicalDatesBlock.module.scss"

const HistoricalDatesBlock = () => {
  return (
    <div className={styles.container}>
      <NavigateBlock />
      <Slider />
    </div>
  )
}

export default HistoricalDatesBlock
