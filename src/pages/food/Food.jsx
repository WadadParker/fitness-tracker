import styles from "./food.module.css";

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchFood,addFood,deleteFood } from "../../actions";

import { FoodCard } from "../../components/cards/FoodCard";

export const Food = () => {

  const [input,setInput]=useState({name:"",calories:"",protein:"",carbohydrates:"",fat:""});

  const dispatch = useDispatch();
  const food = useSelector((state)=>state.food);

  const changeHandler=(inputField,text)=>
  {
    setInput(prev=>({...prev,[inputField]:text}))
  }

  const clickHandler=()=>
  {
    dispatch(addFood({name:input.name,calories:Number(input.calories),protein:Number(input.protein),carbohydrates:Number(input.carbohydrates),fat:Number(input.fat)}));
    setInput({name:"",calories:"",protein:"",carbohydrates:"",fat:""});
  }

  const disableCheck=()=> input.name==='' || input.calories<1 || input.protein<1 || input.carbohydrates<1 || input.fat<1

  const deleteHandler=(id)=>
  {
    dispatch(deleteFood(id));
  }

  useEffect(()=>
  {
    dispatch(fetchFood())
  },[dispatch]);
  return (
    <div>
      <h1 className={styles.heading}>Food</h1>
      <section className={styles[`input-container`]}>
        <input value={input.name} placeholder="Name" onChange={(e)=>changeHandler("name",e.target.value)}/>
        <input value={input.calories} type="Number" placeholder="Calories" onChange={(e)=>changeHandler("calories",e.target.value)}/>
        <input value={input.protein} type="Number" placeholder="Protein" onChange={(e)=>changeHandler("protein",e.target.value)}/>
        <input value={input.carbohydrates} type="Number" placeholder="Carbohydrates" onChange={(e)=>changeHandler("carbohydrates",e.target.value)}/>
        <input value={input.fat} type="Number" placeholder="Fat" onChange={(e)=>changeHandler("fat",e.target.value)}/>
      </section>
      <button className={styles.button} disabled={disableCheck()} onClick={()=>clickHandler()}>Add Food Item</button>
      <button className={`${styles.button} ${styles[`clear-button`]}`} onClick={()=>setInput({name:"",calories:"",protein:"",carbohydrates:"",fat:""})}>Clear</button>
      <ul className={styles.cards}>
        {food.map(item=>
          (
            <FoodCard key={item._id} food={item} deleteHandler={deleteHandler}/>
          ))}
      </ul>
    </div>
  )
}
