import styles from "./dashboard.module.css";

import React, {useState,useEffect}  from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchExcercises, fetchFood, fetchGoals } from "../../actions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const excercises=useSelector((state)=>state.excercises);
  const food= useSelector((state)=>state.food);
  const goals=useSelector((state=>state.goals));

  const totalCalorieGoal = goals.reduce((acc,curr)=>acc + curr?.targetCalories,0);
  const totalCaloriesBurned = excercises.reduce((acc,curr)=>acc + curr?.caloriesBurned,0);
  const totalCaloriesConsumed = food.reduce((acc,curr)=>acc + curr?.calories,0);
  const remainingCaloriesToGoal = totalCalorieGoal - totalCaloriesBurned - totalCaloriesConsumed;

  useEffect(()=>
  {
    dispatch(fetchExcercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  })
  return (
    <div>
      <h1>Dashboard</h1>
      <ul className={styles[`list-container`]}>
        <li className={styles.list}>
          <b>Total Calories Burned</b>
          <span>{totalCaloriesBurned}</span>
        </li>

        <li className={styles.list}>
          <b>Total Calories Goal</b>
          <span>{totalCalorieGoal}</span>
        </li>
        
        <li className={styles.list}>
          <b>Total Calories Consumed</b>
          <span>{totalCaloriesConsumed}</span>
        </li>

        <li className={styles.list}>
          <b>Remaining Calories to Goal</b>
          <span>{remainingCaloriesToGoal<0?"Goal Completed":remainingCaloriesToGoal}</span>
        </li>
      </ul>
    </div>
  )
}
