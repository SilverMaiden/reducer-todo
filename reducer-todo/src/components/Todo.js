import React,{useReducer} from "react";
//Components
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
//Reducers
import {reducer, initialState } from '../reducers/reducer';

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);



    return (
        <>
            <TodoList state={state} />
            <TodoForm dispatch={dispatch}/>
         </>

    )
}

    export default Todo;
