import React from 'react'
import styles from "./Container.module.css"

// children recebe filho
function Container({children}) {
  return (
    <section className={styles.container}>
     
     {children}
    </section>
  )
}

export default Container;
