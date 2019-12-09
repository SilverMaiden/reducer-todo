import React, {useReducer} from 'react';
//
//Reducers
import {reducer, initialState } from '../../reducers/reducer';

const TodoList = (props) => {
       console.log(props.state)
       let myTag;

    return (
        <>
      {props.state.map(todo => (
           todo.completed ? (
           <strike> <li onClick={() => props.dispatch({type: 'TOGGLE', payload:todo})}> {todo.item} </li></strike>
      ) : (
           <li onClick={() => props.dispatch({type: 'TOGGLE', payload:todo})}> {todo.item} </li>
      )

        ))}

           </>

    )
}

export default TodoList;
