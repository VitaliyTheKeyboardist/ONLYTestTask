import { useState } from "react"
import styles from "./dot.module.scss"

export interface IDot {
  style: number 
}

const Dot = ( { style }: IDot) => {
  const [type, setType] = useState<"dot" | "number">("dot")

  const rotate = style + 30

  const handleClick = (type: string) => {
    if (type === "dot") setType("number")
    if (type === "number") setType("dot")
  }

  return (
    <div className={styles.container} style={{rotate: `-${rotate}deg`}}>
      <button className={styles[type]} onClick={() => handleClick(type)}>
        6
      </button>
    </div>
  )
}

export default Dot
