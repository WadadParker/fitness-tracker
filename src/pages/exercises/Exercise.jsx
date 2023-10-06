import styles from "./excercise.module.css";
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchExcercises } from "../../actions";

import { ExerciseCard } from "../../components/cards/ExcerciseCard";

export const Exercise = () => {

  const dispatch = useDispatch();
  const excercises = useSelector((state)=>state.excercises);

  useEffect(()=>
  {
    dispatch(fetchExcercises())
  },[dispatch]);

  return (
    <div>
      <h1 className={styles.heading}>Exercises</h1>
      <ul>
        {excercises.map(item=>
          (
            <ExerciseCard exercise={item}/>
          ))}
      </ul>
    </div>
  )
}
