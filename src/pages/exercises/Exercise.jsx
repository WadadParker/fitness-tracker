import styles from "./excercise.module.css";
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchExcercises,addExcercise,deleteExcercise } from "../../actions";

import { ExerciseCard } from "../../components/cards/ExcerciseCard";

export const Exercise = () => {

  const [input,setInput]=useState({name:"",duration:""});

  const dispatch = useDispatch();
  const excercises = useSelector((state)=>state.excercises);

  const changeHandler=(inputField,text)=>
  {
    setInput(prev=>({...prev,[inputField]:text}))
  }

  const clickHandler=()=>
  {
    dispatch(addExcercise({name:input.name,duration:Number(input.duration)}));
  }

  const disableCheck=()=> input.name==='' || input.duration<1

  const deleteHandler=(id)=>
  {
    dispatch(deleteExcercise(id));
  }

  useEffect(()=>
  {
    dispatch(fetchExcercises())
  },[dispatch]);

  return (
    <div>
      <h1 className={styles.heading}>Exercises</h1>
      <section className={styles[`input-container`]}>
        <input placeholder="Name" onChange={(e)=>changeHandler("name",e.target.value)}/>
        <input type="Number" placeholder="Duration" onChange={(e)=>changeHandler("duration",e.target.value)}/>
        <button className={styles.button} disabled={disableCheck()} onClick={()=>clickHandler()}>Add New Exercise</button>
      </section>
      <ul className={styles.cards}>
        {excercises.map(item=>
          (
            <ExerciseCard key={item._id} exercise={item} deleteHandler={deleteHandler}/>
          ))}
      </ul>
    </div>
  )
}
