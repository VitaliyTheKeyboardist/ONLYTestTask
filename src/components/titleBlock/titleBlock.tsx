import ColorLine from '../../assets/icons/colorLine.svg'
import Title from '../title/title'

import styles from './titleBlock.module.scss'

const TitleBlock = () => {
  return (
    <div className={styles.titleBlock}>
        <img src={ColorLine} alt="цветная линия" />
        <Title />
    </div>
  )
}

export default TitleBlock