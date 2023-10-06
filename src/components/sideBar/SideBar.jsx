import styles from "./sideBar.module.css";

import React from 'react'
import {Link} from "react-router-dom";


export const SideBar = () => {
  return (
    <nav className={styles.navbar}>
        <li className={styles.list}>
          <Link className={styles.link} to="/">Dashboard</Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/excercises"> Excercises </Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/food"> Food </Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/goals"> Goals </Link>
        </li>
        <li className={styles.list}>
            <a className={styles.link} href="https://github.com/WadadParker/fitness-tracker" target="_blank">Github</a>
        </li>
    </nav>
  )
}
