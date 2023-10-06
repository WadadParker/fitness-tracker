import styles from "./card.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ExerciseCard = ({ exercise, deleteHandler }) => {
  return (
    <li className={styles[`card-container`]}>
      <h2 className={styles.header}>
        <span>{exercise?.name}</span>
        <FontAwesomeIcon icon={faTrash} className={styles.icon} onClick={()=>deleteHandler(exercise._id)}/>
      </h2>
      <span>Duration: {exercise?.duration}</span>
      <span>Calories Burned: {exercise?.caloriesBurned}</span>
    </li>
  );
};
