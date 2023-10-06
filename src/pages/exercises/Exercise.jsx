import styles from "./excercise.module.css";
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchExcercises } from "../../actions";

export const Exercise = () => {

  const dispatch = useDispatch();
  const excercises = useSelector((state)=>state.excercises);

  useEffect(()=>
  {
    dispatch(fetchExcercises())
  },[dispatch]);

  return (
    <div>Exercise</div>
  )
}
