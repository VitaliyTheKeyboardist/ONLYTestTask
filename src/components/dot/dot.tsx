import { useState } from "react"
import styles from "./dot.module.scss"

export interface IDot {
    style?: string
}

const Dot = ( { style }: IDot) => {
  const [type, setType] = useState<"dot" | "number">("dot")

  const handleClick = (type: string) => {
    if (type === "dot") setType("number")
    if (type === "number") setType("dot")
  }

  return (
    <div className={styles.container} style={{rotate: `${style}`}}>
      <button className={styles[type]} onClick={() => handleClick(type)}>
        6
      </button>
    </div>
  )
}

export default Dot
