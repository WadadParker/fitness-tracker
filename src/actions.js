const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const fetchExcercises = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/exercises`);
    const data = await response.json();
    dispatch({ type: "FETCH_EXCERCISES", payload: data.excercises });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Error fetching excercises", error);
  }
};

export const addExcercise = (excercise) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/exercises`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(excercise),
    });
    dispatch(fetchExcercises());
  } catch (error) {
    console.log("Error adding new excercise", error);
  }
};

export const deleteExcercise = (excerciseId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/exercises/${excerciseId}`, {
      method: "DELETE",
    });
    dispatch(fetchExcercises());
  } catch (error) {
    console.log("Error deleting the excercise", error);
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/food`);
    const data = await response.json();
    dispatch({ type: "FETCH_FOOD", payload: data.foods });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Failed to fetch food items", error);
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/food`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(food),
    });
    dispatch(fetchFood());
  } catch (error) {
    console.log("Error adding new food", error);
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/food/${foodId}`, {
      method: "DELETE",
    });
    dispatch(fetchFood());
  } catch (error) {
    console.log("Failed to delete the food item", error);
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/goals`);
    const data = await response.json();
    dispatch({ type: "FETCH_GOALS", payload: data.goals });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Failed to fetch goals", error);
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/goals`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(goal),
    });
    dispatch(fetchGoals());
  } catch (error) {
    console.log("Error creating new goal", error);
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/goals/${goalId}`, {
      method: "DELETE",
    });
    dispatch(fetchGoals());
  } catch (error) {
    console.log("Error, could not delete goal", error);
  }
};
