import styles from "./goals.module.css";

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchGoals,addGoal,deleteGoal } from "../../actions";
import { GoalCard } from "../../components/cards/GoalCard";

export const Goals = () => {
  const [input,setInput]=useState({name:"",description:"",date:"",calories:"",status:"In Progress"});
  const dispatch = useDispatch();
  const goals = useSelector((state)=>state.goals);

  const changeHandler=(inputField,text)=>
  {
    setInput(prev=>({...prev,[inputField]:text}))
  }

  const clickHandler=()=>
  {
    const formattedDate = new Date(input.date).toISOString().split('T')[0];
    dispatch(addGoal({name:input.name,description:input.description,targetDate:formattedDate,targetCalories:Number(input.calories),status:input.status}));
    setInput({name:"",description:"",date:"",calories:"",status:"In Progress"});
  }

  const disableCheck=()=> input.name==='' || input.calories<1 || input.date==='' || input.description==='' || input.status===''

  const deleteHandler=(id)=>
  {
    dispatch(deleteGoal(id));
  }

  useEffect(()=>
  {
    dispatch(fetchGoals())
  },[dispatch]);

  return (
    <div>
      <h1 className={styles.heading}>Goals</h1>
      <section className={styles[`input-container`]}>
        <input value={input.name} placeholder="Goal Title" onChange={(e)=>changeHandler("name",e.target.value)}/>
        <input value={input.calories} type="Number" placeholder="Calories" onChange={(e)=>changeHandler("calories",e.target.value)}/>
        <input value={input.date} type="Date" onChange={(e)=>changeHandler("date",e.target.value)}/>
        <select value={input.status} className={`${styles.input} ${styles.select}`} onChange={(e)=>changeHandler("status",e.target.value)}>
          <option value="In Progress">In Progress</option>
          <option value="Achieved">Achieved</option>
          <option value="Abandoned">Abandoned</option>
        </select>
      </section>
      <section className={styles[`input-container`]}>
      <textarea value={input.description} placeholder="Write Description" onChange={(e)=>changeHandler("description",e.target.value)}/>
      <button className={styles.button} disabled={disableCheck()} onClick={()=>clickHandler()}>Add Goal</button>
      <button className={`${styles.button} ${styles[`clear-button`]}`} onClick={()=>setInput({name:"",description:"",date:"",calories:"",status:"In Progress"})}>Clear</button>
      </section>
      <ul className={styles.cards}>
        {goals.map(item=>
          (
            <GoalCard key={item._id} goal={item} deleteHandler={deleteHandler}/>
          ))}
      </ul>
    </div>
  )
}
