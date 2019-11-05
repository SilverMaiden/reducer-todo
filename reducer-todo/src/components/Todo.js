import React,{useReducer, useState} from "react";
//Components
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
//Reducers
import {reducer, initialState } from '../reducers/reducer';

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
        console.log(inputValue);
    }


    return (
        <>
            <TodoList dispatch={dispatch} state={state}  />
            <TodoForm handleChange={handleChange} dispatch={dispatch} inputValue={inputValue} />
         </>

    )
}

    export default Todo;
