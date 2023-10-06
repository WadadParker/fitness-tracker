import styles from "./card.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const GoalCard = ({ goal, deleteHandler }) => {
  return (
    <li className={styles[`card-container`]}>
      <h2 className={styles.header}>
        <span>{goal?.name}</span>
        <FontAwesomeIcon icon={faTrash} className={styles.icon} onClick={()=>deleteHandler(goal._id)}/>
      </h2>
      <p>{goal?.description}</p>
      <span>Target Data: {new Date(goal?.targetDate).toLocaleDateString()}</span>
      <span>Target Calories: {goal?.targetCalories}g</span>
      <span>Status: {goal?.status}g</span>
    </li>
  );
};