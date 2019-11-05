// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {useReducer} from 'react';
//
//Reducers
import {reducer, initialState } from '../../reducers/reducer';

const TodoList = (props) => {
    console.log(props.state);

    return (
        <>
        {props.state.map(todo => (
            <li> {todo.item} </li>
        ))}
         </>

    )
}

export default TodoList;
