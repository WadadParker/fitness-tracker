import styles from "./card.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const FoodCard = ({ food, deleteHandler }) => {
  return (
    <li className={styles[`card-container`]}>
      <h2 className={styles.header}>
        <span>{food?.name}</span>
        <FontAwesomeIcon icon={faTrash} className={styles.icon} onClick={()=>deleteHandler(food._id)}/>
      </h2>
      <span>Calories: {food?.calories}</span>
      <span>Protien: {food?.protein["$numberDecimal"]}g</span>
      <span>Carbohydrates: {food?.carbohydrates["$numberDecimal"]}g</span>
      <span>Fat: {food?.fat["$numberDecimal"]}g</span>
    </li>
  );
};
