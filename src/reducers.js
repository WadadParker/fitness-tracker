const initialState={
    excercises:[],
    food:[],
    goals:[],
    loading:false
}

const fitnessReducer =(state=initialState,action)=>
{
    switch(action.type)
    {
        case "FETCH_DATA_LOADING":
            return {...state, loading:action.payload};

        case "FETCH_EXCERCISES":
            return {...state,excercises:action.payload};
          
        case "FETCH_FOOD":
            return {...state,food:action.payload};

        case "FETCH_GOALS":
            return {...state,goals:action.payload};

        default:
            return state;    
    }
}

export default fitnessReducer;