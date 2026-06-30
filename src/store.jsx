//create store is deprecatedd
import { createStore } from "redux";





// create reducer function (satte ,action)
//always return new copy of it

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
  isloading : true,
  
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };


    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });

      return {
        ...state,
        task: updatedTask,
      };

    default:
        return state;
  }
};

// next step is redux store using reducer (need redux libray)

export const store = createStore(taskReducer);
console.log(store)



// step 3 : log the intial state
// The getState method is a synchronous function that returns the current
// state of a redux application. It includes the entire
// state of the applications , including all the reducers
// and the reducers and their respective states

console.log('Initial state : ' , store.getState());

// step 4 : Dispatch method pass object {type:action,payload : data}
store.dispatch({type:ADD_TASK,payload : "Checking Buy Action"});
console.log('Updated state after add: ' , store.getState());
// data added in the above line

store.dispatch({type  : DELETE_TASK,payload : 0});
console.log('Updated state after delete : ' , store.getState());


//Redux action creators 
/*
An action is an object that tells redux what we want to do it must have a property that 
describe the action 
{type : ACTION_TYPE,payload : somedata}
*/

/*
An action creator is a function that creates an action object this makes it easier
to create actions with diffrenet data

function actionCreator(data){
    {type : ACTION_TYPE,payload : somedata}
}
*/

const addTask = (data) =>{
return {type : ADD_TASK,payload : data}
}
const showStore = (data)=>{
  console.log(data);
  console.log(store.getState());
}

// call the action creator
store.dispatch(addTask('Data Added via action creator 1'));
store.dispatch(addTask('Data Added via action creator 2'));

// show data
showStore('after adding task via action creator');

// step 5 (coonect with the react need package react-redux)
/**
 access redux state in react using useSelector
 const count = useSelector(state => state.property);
 */