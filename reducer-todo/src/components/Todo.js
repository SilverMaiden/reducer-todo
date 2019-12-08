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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue('');
        console.log(inputValue);
    }


    return (
        <>
            <h1> My Todo List </h1>
            <TodoList dispatch={dispatch} state={state}  />
            <br />
            <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} setInputValue={setInputValue} dispatch={dispatch} inputValue={inputValue} />
         </>

    )
}

    export default Todo;
